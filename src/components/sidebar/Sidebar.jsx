import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Sidebar.module.css"
import { IoHomeOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><NavLink to="/"className={({ isActive }) => isActive ? styles.active : ""}><IoHomeOutline className={styles.asideIc}/>Dashboard</NavLink></li>
        <li><NavLink to="/products"className={({ isActive }) => isActive ? styles.active : ""}><IoPricetagOutline className={styles.asideIc}/>Products</NavLink></li>
        <li><NavLink to="/categories"className={({ isActive }) => isActive ? styles.active : ""}><GoFileDirectory className={styles.asideIc}/>Categories</NavLink></li>
      </ul>
    </aside>
  )
}

export default Sidebar

