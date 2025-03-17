import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import "./cart.css";

const Cart = () => {
  const { all_product, cartitems, removefromcart } = useContext(ShopContext);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(Object.keys(cartitems).some((id) => cartitems[id] > 0));
  }, [cartitems]);

  let total = 0;
  if (Array.isArray(all_product)) {
    all_product.forEach((item) => {
      const quantity = cartitems[item.id] || 0;
      total += quantity * (item.new_price || 0);
    });
  }

  return (
    <div className="cart-container">
      <div className="cartcontainer1">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-header">
          <h3 className="cart-header-item">Products</h3>
          <h3 className="cart-header-item">Title</h3>
          <h3 className="cart-header-item">Price</h3>
          <h3 className="cart-header-item">Quantity</h3>
          <h3 className="cart-header-item">Total</h3>
          <h3 className="cart-header-item">Remove</h3>
        </div>
        <hr className="cart-divider" />
        <div className="cart-body">
          {state ? (
            all_product.map((item) => {
              if (cartitems[item.id] > 0) {
                const totalAmount = cartitems[item.id] * item.new_price;
                return (
                  <div key={item.id} className="cart-item1">
                    <div className="cart-item">
                      <img
                        className="cart-item-image"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">
                        ${item.new_price.toFixed(2)}
                      </p>
                      <p className="cart-item-quantity">{cartitems[item.id]}</p>
                      <p className="cart-item-total">${totalAmount}</p>
                      <img
                        src="https://w7.pngwing.com/pngs/57/62/png-transparent-computer-icons-button-closed-angle-rectangle-logo-thumbnail.png"
                        className="cart-item-remove"
                        onClick={() => removefromcart(item.id)}
                        alt="Remove"
                      />
                    </div>
                    <hr className="cart-divider" />
                  </div>
                );
              }
              return null;
            })
          ) : (
            <h2 className="cart-empty">Your cart is empty</h2>
          )}
        </div>

        {state && (
          <div className="cart-total">
            <h2>Total: ${total}</h2>
            {total >= 500 && <h2>Shipping: Free</h2>}
            {total < 500 && <h2>Shipping: $ 50</h2>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
