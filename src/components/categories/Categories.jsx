import React, { useContext, useState } from 'react'
import styles from "./Categories.module.css"
import { AppData } from '../../App'
import { FaPlus } from "react-icons/fa6";
import NoData from "../Modal/NoData"
import AddCategory from '../Modal/AddCategory';

function Categories() {

  const { category } = useContext(AppData)
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.categories}> 

      <div className={styles.ctgHdr}>
        <p className={styles.ctgTitle}>Categories</p>

        <button onClick={() => setOpenModal(true)}>
          <FaPlus /> AddCategories
        </button>
      </div>

      <div className={styles.categoriesBlog}>
        {category.length === 0 ? (
          <NoData/>
        ) : (
          category.map((ctg) => (
            <div key={ctg.id} className={styles.ctgContainer}>
              <div className={styles.ctgBlog}>
                <img src={ctg.src} alt={ctg.name} />
                <div className={styles.itemDesc}>
                  <p className={styles.ctgName}>{ctg.category}</p>
                  <p className={styles.itemCount}>{ctg.item}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {openModal && (
        <AddCategory onClose={() => setOpenModal(false)} />
      )}

    </div>
  )
}

export default Categories