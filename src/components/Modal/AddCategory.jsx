import React, { useState, useContext, useEffect } from 'react'
import styles from "./AddCtg.module.css"
import { IoCloseSharp } from "react-icons/io5";
import { AppData } from '../../App'

function AddCategory({ onClose, editData }) {

  const { category, setCategory } = useContext(AppData)

  const [name, setName] = useState("")
  const [img, setImg] = useState("")

  useEffect(() => {
    if (editData) {
      setName(editData.category)
      setImg(editData.src)
    }
  }, [editData])

  async function handleSubmit() {
    if (!name || !img) {
      alert("Inputlarni to'ldir!")
      return
    }

    const newData = {
      category: name,
      src: img,
      item: editData ? editData.item : 0
    }

  
    if (editData) {
      const res = await fetch(`http://localhost:3000/categories/${editData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
      })

      const data = await res.json()

      setCategory(category.map(c => c.id === editData.id ? data : c))
    } 
  
    else {
      const res = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
      })

      const data = await res.json()

      setCategory([...category, data])
    }

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

        <p className={styles.addCtgTitle}>
          {editData ? "Edit Category" : "Add Category"}
        </p>

        <label>
          Category Name
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Category Image url
          <input 
            type="text" 
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>

        <div className={styles.addCtgBtns}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>
            {editData ? "Save Changes" : "Create Category"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddCategory