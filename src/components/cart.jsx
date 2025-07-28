import React, { useContext } from 'react';
import { ProductContext } from '../context/context';

export default function Cart() {
  const { cart, removeFromCart } = useContext(ProductContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {cart.length === 0 ? (
        <div id="cart-container">
          <h2>Your cart (0)</h2>
          <img 
            src="/assets/images/illustration-empty-cart.svg" 
            alt="Empty cart" 
            className="empty-cart-img" 
          />
          <div id="cart-items">
            Your added items will appear here
          </div>
        </div>
      ) : (
        <div id="cart-container">
          <h2>Your cart ({totalItems})</h2>
          <div id="cart-items">
            {cart.map(item => (
              <div key={item.id} className="order-container">
                <div className="order">
                  <div className="order-details">
                    <p>{item.name}</p>
                    <div className="quantity-details">
                      <span className="quantity">{item.quantity}x</span>
                      <span className="unit-price">@ ${item.price.toFixed(2)}</span>
                      <span className="total-price">${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  </div>
                  <div 
                    className="remove-order" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="remove-item"
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="cart-total">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </>
  );
}