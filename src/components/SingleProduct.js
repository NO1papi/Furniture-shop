import React from "react";
import { Link, useParams } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import "./css/SingleProduct.css";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
const SingleProduct = () => {
  const { data, setSPcolor, setSPamount, addToCart } = useGlobalContext();
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));

  // Resetuj boju na prvu dostupnu kada promenimo proizvod
  useEffect(() => {
    if (product) {
      setSPcolor(product.colors[0]); // Postavi prvu dostupnu boju
      setSPamount(1); // Resetuj količinu na 1
    }
  }, [product]); // Svaki put kad se promeni proizvod, resetujemo boju i količinu

  return (
    <section className="single-product">
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <h3 className="product-brand">{product.company}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-colors">
            <h4>Colors</h4>
            <div className="colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                  value={color}
                  onClick={() => setSPcolor(color)}
                ></span>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <label htmlFor="amount">Amount </label>
            <select
              id="amount"
              className="amount-select"
              onChange={(e) => {
                setSPamount(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            ADD TO BAG
          </button>
          <Link to="/products" className="back-to-products">
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
