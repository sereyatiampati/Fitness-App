import React from "react";
import { Cart } from "../cart/cart.js";
import { PRODUCTS } from "../../context/products.js";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <>
      <Cart/>
      <div className="shop">
        <div className="shopTitle">
          <h3>CrossFit Shop</h3>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </>
    
  );
};
