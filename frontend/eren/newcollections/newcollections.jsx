import React, { useEffect, useState } from 'react'
import Items from '../items/items';
import "./newcollections.css"
import Product from '../../pages/Product';
function Newcollections () {
  const [new_collections,setnewcollections] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/newcollections")
    .then((response)=>response.json())
    .then((data)=>setnewcollections(data))
  },[ ])
  return (
     
    <div className='newcollec'>
    <h1 className="newcoll-h1">New Collections</h1>
    <div className="newcollection">
        {new_collections.map((item,index)=> {
            return <Items id={item.id} key={index} new_price={item.new_price} old_price={item.old_price} image={item.image} name={item.name} />
        })}
     <Product/>
    </div></div>
  )
}

export default Newcollections;