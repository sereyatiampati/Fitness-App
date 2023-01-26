import React from "react";
import { PRODUCTS } from "../product/products";
import { Product } from "./ProductItem";
import "../shop/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>CrossFit Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
