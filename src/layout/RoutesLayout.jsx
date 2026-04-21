import React from 'react'
import styles from "./RoutesLayout.module.css"
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
function RoutesLayout() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <main>
      <Sidebar/>
        <Outlet/>
      </main>
    </div>
  )
}

export default RoutesLayout
