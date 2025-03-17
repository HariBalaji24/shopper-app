import React from 'react'
import "./hero.css"
import { Link } from "react-router-dom";

function  Hero() {
  return (
    <div className='container1' >
      <div className="hero-container2">
      <div className="left">
           <p className='p1' > Step into style</p>
           <p className='p2'>Discover the latest arrivals </p>
           <p className='p3'>that redefine your wardrobe!</p>
            <Link to="/" > <button className='shopnow' >Shop now </button></Link>
        </div>
        <div className="right">
            <img className='hero-image' src="https://i.imgur.com/mV9cmFc.png" alt="" />
        </div>
      </div>
        
    </div>
  )
}

export default Hero