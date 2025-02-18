import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { itemsAmount } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          C
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <Link to="/cart" className="cart-icon">
            🛒<span className="cart-count">{itemsAmount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
