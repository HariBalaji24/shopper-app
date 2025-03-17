import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Items from "../eren/items/items";

function Category(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="newcollec">
      <img src={props.banner} className="category-banner" alt="Category Banner" />
      <div className="category-elements"></div>
      <div className="newcollection">
        {all_product
          .filter((item) => item.category === props.cate) // Filter items based on category
          .map((item) => (
            <Items
              id={item.id} // Correct usage of id
              key={item.id} // Ensure unique key for performance
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
              name={item.name}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
