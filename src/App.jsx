import React, { useEffect, useState } from 'react'
import RoutesLayout from './layout/RoutesLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { createContext } from 'react'
export const productsData = createContext();
function App() {
const [products, setProducts] = useState([])

  async function fetchProducts() {
    const res = await fetch("http://localhost:3000/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  const router = createBrowserRouter([
    {
        path: "/",
        element : <RoutesLayout/>,
        errorElement: <h1>Error </h1>,
        children: [
          {
            index: true,
            element: <Dashboard/>
          
          },
          {
            path: "/products",
            // element: <Products/>,
            element: <h1>Products</h1>
          },
          {
            path: "/categories",
            element: <h1>Categories</h1>,
            // element: <Categories/>,
          },
        ]
    }
  ])
  
  return (
    <productsData.Provider value={products}>
      <RouterProvider router={router} />
    </productsData.Provider>
  )
}

export default App
