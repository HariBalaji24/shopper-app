import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

function getdefaultcart() {
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
}

const Shopcontextprovider = (props) => {
  const [all_product, setallproduct1] = useState([]);
  const [cartitems, setcartitems] = useState(getdefaultcart());

  useEffect(() => {
    fetch("http://localhost:3000/showproducts")
      .then((response) => response.json())
      .then((data) => setallproduct1(data))
      .catch((err) => console.error("Error fetching products:", err));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:3000/getcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setcartitems(data))
        .catch((err) => console.error("Error fetching cart:", err));
    }
  }, []);

  function addtocart(itemid) {
   

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:3000/addproducttocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ itemId: itemid }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("Error adding to cart:", err));
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  }

  function removefromcart(itemid) {
   

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:3000/removeproducttocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ itemId: itemid }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("Error removing from cart:", err));
        setcartitems((prev) => ({ ...prev, [itemid]:prev[itemid] - 1 }));
    }
  }

  const contextvalue = { all_product, cartitems, addtocart, removefromcart };
  return <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>;
};

export default Shopcontextprovider;
