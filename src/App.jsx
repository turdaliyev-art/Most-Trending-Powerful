import React, { useEffect, useState, createContext } from 'react'
import RoutesLayout from './layout/RoutesLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/products/Products'
import ProductsLayout from './layout/ProductsLayout'
import AddProducts from './components/products/AddProducts'
import Categories from './components/categories/Categories'

export const AppData = createContext();

function App() {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
   const [search, setSearch] = useState("")


  async function fetchProducts() {
    const res = await fetch("http://localhost:3000/products")
    const data = await res.json()
    setProducts(data)
  }

  async function fetchCategory() {
    const res = await fetch("http://localhost:3000/categories")
    const data = await res.json()
    setCategory(data)
  }

  useEffect(() => {
    fetchProducts()
    fetchCategory()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayout />,
      errorElement: <h1>Error</h1>,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: "/products",
          element: <ProductsLayout />,
          children: [
            {
              index: true,
              element: <Products />
            },
            {
              path: "addProduct",
              element: <AddProducts />
            }
          ]
        },
        {
          path: "/categories",
          element: <Categories />
        }
      ]
    }
  ])

  return (
   <AppData.Provider value={{ products,setProducts, category, setCategory, search, setSearch }}>
      <RouterProvider router={router} />
    </AppData.Provider>
  )
}

export default App