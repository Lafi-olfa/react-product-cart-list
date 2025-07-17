// src/components/Cart.js
import React from 'react';

export default function Cart() {

  return (
    <div id="cart-container">
       <h2>Your cart (7)</h2>
      <img src="/assets/images/illustration-empty-cart.svg" alt="Empty cart" className="empty-cart-img"></img>
      <div id="cart-items">
        </div>
        <div className="order-container">
          order
        </div>
    </div>
  );
}