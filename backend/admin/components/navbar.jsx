import React from 'react'
import dropdown_icon from "../Assets/dropdown_icon.png"
import eren from "../Assets/eren.jpg"
import "./navbar.css"
const Navbar = () => {
  return (
    
    <div>
      <div className="admin-navbar">
        <div className="admin-navbar-container">
            <div className="admin-navbar-names">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2iJXn4HxB-MTbxOx1wh_FZHlhP5dsDyUQw&s" className="admin-navbar-image1" />
                 <p className="admin-navbar-shopper">Shopper App</p>
            </div>
            <div className="admin-navbar-profile">
                <img src={eren} className='admin-navbar-image2' alt="" />
                <img src= {dropdown_icon} className='admin-navbar-image3' alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar