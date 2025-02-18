import React from "react";
import "./css/CartProduct.css";
import { useGlobalContext } from "../context";

const CartProduct = ({ produkt }) => {
  const { removeProduct } = useGlobalContext();
  return (
    <div className="cart-product">
      <img
        src={produkt.stari_produkt.image}
        alt="Product"
        className="cart-product-image"
      />
      <div className="cart-product-info">
        <h3>{produkt.stari_produkt.name}</h3>
        <p className="cart-product-brand">{produkt.stari_produkt.store}</p>
        <p className="cart-product-color">
          Color: <span className={`color-dot ${produkt.color}`}></span>
        </p>
      </div>
      <div className="cart-product-quantity">
        <p className="cart-product-brand">{produkt.amount}</p>
        <button
          className="remove-btn"
          onClick={() =>
            removeProduct(
              produkt.stari_produkt.id,
              produkt.color,
              produkt.amount
            )
          }
        >
          remove
        </button>
      </div>
      <p className="cart-product-price">
        ${(produkt.amount * produkt.stari_produkt.price).toFixed(2)}
      </p>
    </div>
  );
};

export default CartProduct;
