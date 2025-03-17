import React from 'react'
import "./item.css"
import { Link } from "react-router-dom";
function Item(props) {
    return (
        <div className='container2'>
            <Link to={`/product/${props.id}`} ><img src={props.image} className='img1' /></Link> 
            <span className='item-name' >{props.name}</span>
            <div className="prices">
             <p className='p11' >${props.new_price}</p>
            <p className='p21'>${props.old_price}</p>
            <p className="p31">Save ${props.old_price - props.new_price}</p>
        </div>
       </div >
    )
}

export default Item;