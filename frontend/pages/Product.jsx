import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Bachira from "../eren/bachira/bachira";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const  {productid } = useParams();
  console.log(productid)
  const product = all_product.find((e) => e.id === Number(productid));
  console.log(product)
  return (
    <div>
      <Bachira product={product} />
    </div>
  );
 
};

export default Product;
