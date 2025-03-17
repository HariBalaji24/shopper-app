import React, {useState} from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
     
     return (
        <div className="conatiner">
         <Link to='/' >
         <div className="nav1">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2iJXn4HxB-MTbxOx1wh_FZHlhP5dsDyUQw&s" className="image1" />
                 <p className="shopper">Shopper App</p>
            </div></Link>
            
           <div className="nav2">
              <li  value= "shop"><Link to="/">Shop</Link> </li>
              <li   value= "men"><Link to="/men">Men</Link> </li>
              <li   value= "women"><Link to="/women">Women</Link> </li>
              <li   value= "kid"><Link to="/kid">Kids</Link> </li>
           </div>
           <div className="nav3">
               <Link to="/cart"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ2w7raR02vnAm-99QKaRCjJwjzOYtvgR4w&s" className="image2" /></Link>
              {localStorage.getItem("auth-token") ? (<button onClick={()=>{localStorage.removeItem("auth-token"); window.location.replace("/")}} >Log Out</button>) : (<button><Link to="/login" >Login</Link></button>) }
              
           </div>
        </div>
     )
}
export default Navbar;