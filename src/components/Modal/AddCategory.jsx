import React, { useState, useContext } from 'react'
import styles from "./AddCtg.module.css"
import { IoCloseSharp } from "react-icons/io5";
import { AppData } from '../../App'

function AddCategory({ onClose }) {

  const { category, setCategory } = useContext(AppData)

  const [name, setName] = useState("")
  const [img, setImg] = useState("")

  async function handleAdd() {
    if (!name || !img) {
      alert("Inputlarni to‘ldir!")
      return
    }

    const newCategory = {
      category: name,
      src: img,
      item: 0
    }

 
    const res = await fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCategory)
    })

    const data = await res.json()

    setCategory([...category, data])

    onClose()
  }

  return (
    <div className={styles.overlay} onClick={onClose}>

      <div 
        className={styles.addCtgModal}
        onClick={(e) => e.stopPropagation()}
      >

        <IoCloseSharp 
          className={styles.closeBtn}
          onClick={onClose}
        />

        <p className={styles.addCtgTitle}>Add Category</p>

        <label>
          Category Name
          <input 
            type="text" 
            placeholder='Women Clothes'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Category Image url
          <input 
            type="text" 
            placeholder='Image url'
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>

        <div className={styles.addCtgBtns}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleAdd}>Create Category</button>
        </div>

      </div>
    </div>
  )
}

export default AddCategory