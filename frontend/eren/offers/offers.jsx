import React from 'react'
import "./offers.css";

import png from "/Assets/p.png"
import { Link } from 'react-router-dom';

function Offers () {
  return (
    <div className="offer-container">
      <div className='container3' >
        <div className="left1">
            <p className='offer-p1' >Exclusive </p>
            <p className='offer-p2' >Offers For You</p>
            <p className='offer-p3' >Only on best selling products</p>
           <Link to="/product/8" ><button className='offer-button' >Check Now</button></Link>
        </div>
        <div className="right1">
             <img src={png} alt="" /> 
        </div>
       </div>
    </div>
       
  )
}
export default Offers;