import React, { useEffect, useState } from 'react'
import Item from '../item/item.jsx'
import "./popular.css"

function Popular () {
   const [data_product,setnewcollections] = useState([])
    useEffect(()=>{
       fetch("http://localhost:3000/popular")
       .then((response)=>response.json())
       .then((data)=>setnewcollections(data))
     },[])
  return (
   
     <div>
        <h1 className='popular-h1'>Popular Now</h1>
        <div className='cont'>
        {data_product.map((item,index)=> {
            return <Item id={item.id} key={index} new_price={item.new_price} old_price={item.old_price} image={item.image} name={item.name} />
        })}
     </div></div>
  )
}

export default Popular;