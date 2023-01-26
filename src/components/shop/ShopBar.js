import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./shopbar.css";

export const ShopBar = () => {
  return (
    <div className="shopbar">
      <div className="tagtext">Welcome To Flexy Shop</div>
      <div className="links">
        <Link to="/"> Our Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
