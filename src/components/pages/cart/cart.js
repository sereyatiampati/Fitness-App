import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../context/products.js";
import { CartItem } from "./cart-item.js";
import { Redirect } from "react-router-dom"
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  // const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h4>Your Cart Items</h4>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => { checkout(); <Redirect to="/checkout"/>}}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              <Redirect to="/checkout" />;
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h5> Your Shopping Cart is Empty</h5>
      )}
    </div>
  );
};
