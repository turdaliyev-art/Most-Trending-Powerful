import React, { useContext } from 'react'
import styles from "./Header.module.css"
import { GoSearch } from "react-icons/go";
import { AppData } from '../../App';

function Header() {

  const { search, setSearch } = useContext(AppData)

  return (
    <header>

      <div className={styles.hdrLogo}>
        <img src="./Logo.png" alt="Logo" />
        <p className={styles.logoTxt}>Modernize</p>
      </div>

      <nav>
        <GoSearch className={styles.searchIc} />

        <input
          type="search"
          placeholder="Search products or categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className={styles.userAcc}>
        <img src="./avatar.png" alt="" width="36px" />
        <p className={styles.userName}>Xeriya Ponald</p>
      </div>

    </header>
  )
}

export default Header