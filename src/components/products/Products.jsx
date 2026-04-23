import React, { useContext, useState } from 'react'
import styles from "./Products.module.css"
import { FaPlus } from "react-icons/fa6";
import { AppData } from '../../App'
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Delete from '../Modal/Delete';
import AddProducts from './AddProducts';
import { NavLink } from 'react-router-dom';
import NoData from '../Modal/NoData';

function Products() {

  const { products, setProducts, search } = useContext(AppData)

  const [selectedIds, setSelectedIds] = useState([])
  const [openDelete, setOpenDelete] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)


  function handleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  function handleSelectAll(e) {
    if (e.target.checked) {
      setSelectedIds(products.map(p => p.id))
    } else {
      setSelectedIds([])
    }
  }


  async function handleDelete() {
    try {
      await Promise.all(
        selectedIds.map(id =>
          fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE"
          })
        )
      )

      setProducts(products.filter(p => !selectedIds.includes(p.id)))

      setSelectedIds([])
      setOpenDelete(false)

    } catch (error) {
      console.log(error)
    }
  }

  
  function filterProducts(list, query) {
    if (!query) return list

    return list.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  const visibleProducts = filterProducts(products, search)

  return (
    <div className={styles.products}>


      <div className={styles.productsHdr}>
        <p className={styles.productsTitle}>Products</p>

        <NavLink to="addProduct">
          <FaPlus /> Add Product
        </NavLink>
      </div>

      <div className={styles.prdContainer}>


        <div className={styles.btns}>

          <button
            onClick={() => {
              const product = products.find(p => p.id === selectedIds[0])
              setSelectedProduct(product)
              setOpenEdit(true)
            }}
            disabled={selectedIds.length !== 1}
          >
            <AiOutlineEdit className={styles.editBtn}/>
          </button>

          <button 
            onClick={() => setOpenDelete(true)}
            disabled={selectedIds.length === 0}
          >
            <MdOutlineDeleteOutline className={styles.delBtn}/>
          </button>

        </div>
{products.length == 0 ? <NoData/> :
        <table className={styles.table}>

          <thead className={styles.thead}>
            <tr>
              <th className={styles.tableHdr}>
                <input 
                  type="checkbox" 
                  onChange={handleSelectAll}
                  checked={selectedIds.length === products.length && products.length > 0}
                />
                Products
              </th>
              <th>Inventory</th>
              <th>Color</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>


            {visibleProducts.length === 0 && search ? (
              <tr>
                <td colSpan="5">No products found</td>
              </tr>
            ) : (

              visibleProducts.map((product) => (
                <tr key={product.id}>

                  <td>
                    <div className={styles.productInfo}>
                      <input 
                        type="checkbox"
                        checked={selectedIds.includes(product.id)}
                        onChange={() => handleSelect(product.id)}
                        />

                      <img 
                        src={product.src} 
                        alt={product.name} 
                        className={styles.productImg} 
                        />

                      {product.name}
                    </div>
                  </td>

                  <td>{product.inventory}</td>
                  <td>{product.color}</td>
                  <td>${product.price}</td>
                  <td>{product.rating}</td>

                </tr>
              ))
              
            )}

          </tbody>

        </table>
    }
      </div>


      {openDelete && (
        <Delete
          count={selectedIds.length}
          onClose={() => setOpenDelete(false)}
          onDelete={handleDelete}
          />
        )}


      {openEdit && (
        <AddProducts
        editData={selectedProduct}
        onClose={() => {
          setOpenEdit(false)
            setSelectedProduct(null)
          }}
          />
        )}

    </div>
  )
}

export default Products