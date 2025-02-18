import React from "react";
import "./css/FeaturedProducts.css";
import products from "../data"; // koristi lokalni data.js
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <h2>Featured Products</h2>
      <div className="featured-container">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
