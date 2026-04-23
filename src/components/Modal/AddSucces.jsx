import React from 'react'
import styles from "./AddSucces.module.css"
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

function AddSucces({ closeAction }) {
  return (
    <div className={styles.overlay} onClick={closeAction}>

      <div 
        className={styles.succesDiv}
        onClick={(e) => e.stopPropagation()}
      >

        <IoCloseSharp 
          className={styles.closeBtn} 
          onClick={closeAction}
        />

        <div className={styles.aboutDesc}>
          <p className={styles.succesIcon}>
            <IoMdCheckmark className={styles.succesIc}/>
          </p>
          <p className={styles.text}>Add Successful</p>        
        </div>

        <button onClick={closeAction}>
          Continue
        </button>

      </div>
    </div>
  )
}

export default AddSucces