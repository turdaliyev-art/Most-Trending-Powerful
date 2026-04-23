import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import styles from "./Delete.module.css"

function Delete({ onClose, onDelete, count }) {
  return (
    <div className={styles.overlay} onClick={onClose}>

      <div 
        className={styles.deleteDiv}
        onClick={(e) => e.stopPropagation()}
      >

        <IoCloseSharp 
          className={styles.closeBtn} 
          onClick={onClose} 
        />

        <div className={styles.aboutDesc}>
          <p className={styles.desc}>Delete Items</p>

          <p className={styles.text}>
            Are you sure you want to delete {count} selected items?
          </p>

          <div className={styles.btns}>
            <button onClick={onClose}>Cancel</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Delete