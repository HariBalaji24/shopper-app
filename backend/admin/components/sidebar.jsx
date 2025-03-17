import React from 'react'
import addproducts from "../Assets/addproducts.png"
import productlist from "../Assets/productlist1.png"
import "./sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar-addproducts">
            <Link  to="/addproducts" > <img className='sidebar-image1' src={addproducts} alt="" /></Link>
            <p className="sidebar-para">Add products</p>
       </div>
       <div className="sidebar-listproducts">
            <Link to="/listproducts" ><img className='sidebar-image2' src={productlist} alt="" /></Link>
            <p className="sidebar-para">List products</p>
       </div>
    </div>
  )
}

export default Sidebar