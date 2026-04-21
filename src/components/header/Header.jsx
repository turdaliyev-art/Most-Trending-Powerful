import React from 'react'
import styles from "./Header.module.css"
import { GoSearch } from "react-icons/go";

function Header() {
  return (
    <header>
      <div className={styles.hdrLogo}>
        <img src="./Logo.png" alt="Logo.png" />
        <p className={styles.logoTxt}>Modernize</p>
      </div>

      <nav>
        <GoSearch className={styles.searchIc}/>
        <input type="search" placeholder='Search...'/>
      </nav>

      <div className={styles.userAcc}>
        <img src="./avatar.png" alt="" width="36px"/>
        <p className={styles.userName}>Xeriya Ponald</p>
      </div>
    </header>
  )
}

export default Header
