import React, { useContext, useState } from "react";
import breadcrum_arrow from "/Assets/breadcrum_arrow.png";
import star_dull_icon from "/Assets/star_dull_icon.png";
import star_icon from "/Assets/star_icon.png";
import { Link } from "react-router-dom";
import "./bachira.css";
import { ShopContext } from "../../context/ShopContext";
const Bachira = (props) => {
  
  const { product } = props;
  
  if (!product) {
    return <h2></h2>;
  }
  const {addtocart} = useContext(ShopContext)
  return (
    <div className="bachirabluelock">  <div className="bachira">
        <div className="bachira-top-elements">
          <Link to={"/"}>
            <p className="bachira-home" >Home</p>
          </Link>
          <img src={breadcrum_arrow} className="breadcrumarrow" />
          <Link to={`/${product.category}`}>
            <p className="bachira-home" >{product.category}</p>
          </Link>
          <img src={breadcrum_arrow} className="breadcrumarrow" />
          <p>{product.name}</p>
        </div>
        <div className="bachira-product-section">
          <div className="bachira-imagesection">
          <div className="bachira-left">
            <div className="bachira-smallimages">
              <img className="bachira-img" src={product.image} alt="" />
              <img className="bachira-img"  src={product.image} alt="" />
              <img className="bachira-img"  src={product.image} alt="" />
              <img className="bachira-img"  src={product.image} alt="" />
            </div>
            </div>
            <div className="bachira-right">
            <div className="bachira-bigimage">
              <img className="bachira-img1" src={product.image} alt="" />
            </div>
          
          <div className="bachira-description-section">
              <div className="bachira-prouctname">{product.name}</div>
              <div className="bachira-star-section">
                   <img src={star_icon} alt="" className="star" />
                   <img src={star_icon} alt="" className="star" />
                   <img src={star_icon} alt="" className="star" />
                   <img src={star_icon} alt="" className="star" />
                   <img src={star_dull_icon} alt="" className="dullstar" />
              </div>
              <div className="bachira-price-section">
                <div className="bachira-old">${product.old_price}</div>
                <div className="bachira-new">${product.new_price}</div>
              </div>
              <div className="sizes">
                   <p className="selectsize">Select Size</p>
                   <div className="bachira-sizes">
                    <div className="bachira-size">S</div>
                    <div className="bachira-size">M</div>
                    <div className="bachira-size">L</div>
                    <div className="bachira-size">XL</div>
                    <div className="bachira-size">XXL</div>
                   </div>
              </div>
              <button className="bachira-cart" onClick={() => addtocart(product.id)}> ADD TO CART</button>

              <div className="spanelements">
              <span className="bachira-span1" >Category : </span>
              <span className="bachira-span2" > {product.category} , T-Shirt</span>
              </div>
              <div className="bachira-desc">
              <span className="bachira-span1" >Description : </span>
                  <span>{product.description}</span>
              </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Bachira;
