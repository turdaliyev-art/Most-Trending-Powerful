import React from 'react'
import styles from "./NoData.module.css"
import { FaPlus } from "react-icons/fa6";



function NoData() {
  return (
    <div className={styles.NoData}>
      <img src="./noData.png" alt="img.png" />
      <p className={styles.ndTitle}>Create First Category</p>
      <p className={styles.ndDesc}>Organize all your items in stock by creating and adding them to categories. <br />  Categories helps to find items faster for your customers.</p>


    </div>
  )
}

export default NoData
