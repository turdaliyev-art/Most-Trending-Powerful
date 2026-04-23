import React, { useContext, useState } from 'react'
import styles from "./Categories.module.css"
import { AppData } from '../../App'
import { FaPlus } from "react-icons/fa6";
import NoData from "../Modal/NoData"
import AddCategory from '../Modal/AddCategory';
import { AiOutlineEdit } from "react-icons/ai";

function Categories() {
  const { category, search } = useContext(AppData)

  const [openModal, setOpenModal] = useState(false)
  const [selected, setSelected] = useState(null)

  function filterCategories(list, query) {
    if (!query) return list

    return list.filter((c) =>
      c.category.toLowerCase().includes(query.toLowerCase())
    )
  }

  const visibleCategories = filterCategories(category, search)

  return (
    <div className={styles.categories}> 


      <div className={styles.ctgHdr}>
        <p className={styles.ctgTitle}>Categories</p>

        <button onClick={() => {
          setSelected(null)
          setOpenModal(true)
        }}>
          <FaPlus /> AddCategories
        </button>
      </div>

    
      <div className={styles.categoriesBlog}>

        {category.length === 0 ? (
          <NoData/>

        ) : visibleCategories.length === 0 && search ? (
          <NoData />

        ) : (
          visibleCategories.map((ctg) => (
            <div key={ctg.id} className={styles.ctgContainer}>
              
              <img src={ctg.src} alt={ctg.category} />


              <div className={styles.ctgEdit}>
                <button
                  onClick={() => {
                    setSelected(ctg)
                    setOpenModal(true)
                  }}
                >
                  <AiOutlineEdit/> Edit
                </button>
              </div>

              <div className={styles.itemDesc}>
                <p className={styles.ctgName}>{ctg.category}</p>
                <p className={styles.itemCount}>{ctg.item}</p>
              </div>

            </div>
          ))
        )}

      </div>

      {openModal && (
        <AddCategory 
          onClose={() => {
            setOpenModal(false)
            setSelected(null)
          }} 
          editData={selected}
        />
      )}

    </div>
  )
}

export default Categories