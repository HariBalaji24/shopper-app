import React, { useEffect, useState } from 'react'
import "./listproducts.css"
const Listproduct = () => {

    const [allproducts,setallproducts] = useState([])
    const fetchinfo = async ()=>{
        await fetch('http://localhost:3000/showproducts')
        .then((resp)=>resp.json())
        .then((data)=>{setallproducts(data)})
    }

    useEffect(()=>{
        fetchinfo()
    },[])

    const removeproduct = async(id)=>{
        await fetch('http://localhost:3000/removeproduct',{
            method:'POST',
            headers:{
                Accept : 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchinfo()
    }

  return (
    <div className='listproducts-1'>
        <div className="listproducts-2">
            <div className="listproducts-header">
                <p >Product</p>
                <p >Name</p>
                <p >Old Price</p>
                <p >New Price</p>
                <p >Category</p>
                <p >Remove</p>
            </div>
            <hr />
             {allproducts.map((products,index)=>{
                return <div className="listproducts-allproducts">
                    <img src={products.image} alt="" className="listproducts-image" />
                    <p className="listproducts-name" >{products.name}</p>
                    <p className="listproducts-old_price">{products.old_price}</p>
                    <p className="listproducts-new_price">{products.new_price}</p>
                    <p className="listproducts-category">{products.category}</p>
                    <img
                        src="https://w7.pngwing.com/pngs/57/62/png-transparent-computer-icons-button-closed-angle-rectangle-logo-thumbnail.png"
                        className="listproducts-remove"
                        onClick={()=>{removeproduct(products.id)}}
                        alt="Remove"
                      />
                      
                </div>
                
             })}
        </div>
    </div>
  )
}

export default Listproduct