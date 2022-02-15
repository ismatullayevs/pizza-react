import React from "react";
import { Link } from "react-router-dom";
import "./MobileCart.scss";

export default function MobileCart() {
  return (
    <Link to="#" className="mobile-cart">
      <img src="images/Shopping bag.svg" alt="cart" />
      <span className="cart__count">4</span>
    </Link>
  );
}
