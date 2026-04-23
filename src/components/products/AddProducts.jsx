import React, { useState, useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./AddProducts.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { AppData } from '../../App';
import AddSucces from "../Modal/AddSucces";

function AddProducts() {

  const { products, setProducts } = useContext(AppData)
  const navigate = useNavigate()

  const [success, setSuccess] = useState(false)

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    src: '',
    price: '',
    discountPrice: '',
    category: ''
  })

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = async () => {

    if (!productData.name || !productData.price || !productData.src || !productData.category) {
      alert("Inputlarni to'ldir!")
      return
    }

    const newProduct = {
      ...productData,
      price: Number(productData.price),
      discountPrice: Number(productData.discountPrice),
      id: Date.now().toString(),
      inventory: 0,
      color: 'N/A',
      rating: 0
    }

    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await res.json()

    if (res.ok) {
      setProducts([...products, data])


      setSuccess(true)
    }
  }

  return (
    <div>

      <Link to="/products"><FaArrowLeftLong /> Back</Link>

      <p className={styles.prTitle}>Add Product</p>

      <div className={styles.prAddForm}>
        
        <form onSubmit={(e) => e.preventDefault()}>

          <p className={styles.formDesc}>Information</p>

          <label>
            Product Name
            <input 
              type="text" 
              name="name"
              onChange={handleChange}
              placeholder='Summer T-Shirt' 
            />
          </label>

          <label>
            Product Description
            <textarea 
              name="description"
              onChange={handleChange}
              placeholder='Product description' 
            />
          </label>

          <label>
            Images URL
            <input 
              type="text" 
              name="src"
              onChange={handleChange}
              className={styles.imgUrl}
            />
          </label>

          <p className={styles.formDesc}>Price</p>

          <div className={styles.formPriceBlog}>

            <div className={styles.prPrice}>
              <label>Product Price</label>
              <input 
                type="text" 
                name="price"
                onChange={handleChange}
                placeholder='Enter price'
              />
            </div>

            <div className={styles.prPrice}>
              <label>Price at Discount</label>
              <input 
                type="text" 
                name="discountPrice"
                onChange={handleChange}
                placeholder='Price at Discount'
              />
            </div>

          </div>

        </form>
        
        <div className={styles.prCategories}>

          <div className={styles.prCategoriesInp}>
            <p className={styles.ctgTitle}>Categories</p>

            <ul>
              <li>
                <input type="radio" name="category" value="Women" onChange={handleChange}/>
                Women
              </li>
              <li>
                <input type="radio" name="category" value="Men" onChange={handleChange}/>
                Men
              </li>
              <li>
                <input type="radio" name="category" value="T-Shirt" onChange={handleChange}/>
                T-Shirt
              </li>
              <li>
                <input type="radio" name="category" value="Hoodie" onChange={handleChange}/>
                Hoodie
              </li>
              <li>
                <input type="radio" name="category" value="Dress" onChange={handleChange}/>
                Dress
              </li>
            </ul>
          </div>

          <div className={styles.formBtns}>

            <button 
              type="button" 
              onClick={() => navigate("/products")}
            >
              Cancel
            </button>

            <button 
              type="button" 
              onClick={handleSave}
            >
              Save
            </button>

          </div>
        </div>

      </div>


      {success && (
        <AddSucces 
          closeAction={() => {
            setSuccess(false)
            navigate("/products")
          }} 
        />
      )}

    </div>
  )
}

export default AddProducts