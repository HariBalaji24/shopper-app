import React from 'react'
import "./items.css"
import { Link } from "react-router-dom";
function Items(props) {
    return (
        <div className='items'>
            <Link to={`/product/${props.id}`} ><img src={props.image} className='img2' /></Link>  
            <span className='items-name' >{props.name}</span>
            <div className="prices2">
             <p className='p11' >${props.new_price}</p>
            <p className='p21'>${props.old_price}</p>
            <p className="p31">Save ${props.old_price - props.new_price}</p>
        </div>
       </div >
    )
}

export default Items;