import React from "react";
import "./css/Product.css";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Product = ({ produkt }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${produkt.id}`}>
        <img src={`${produkt.image}`} alt="Product" className="product-img" />
        <h3 className="product-name">{produkt.name}</h3>
        <p className="product-price">${produkt.price}</p>
      </Link>
    </div>
  );
};

export default Product;
