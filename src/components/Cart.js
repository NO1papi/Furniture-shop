import React from "react";
import CartProduct from "./CartProduct";
import "./css/Cart.css";
import { useGlobalContext } from "../context";

const Cart = () => {
  const { cart, itemPrice } = useGlobalContext();

  if (!cart || !Array.isArray(cart)) {
    return <p>Loading cart...</p>;
  }
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {/* Lista proizvoda u korpi */}
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((produkt, index) => {
            return <CartProduct key={index} produkt={produkt} />;
          })
        ) : (
          <p>Product list is empty</p>
        )}
      </div>

      {/* Total Price & Checkout */}
      <div className="cart-summary">
        <h3>
          Total Price: <span>${itemPrice}</span>
        </h3>
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
