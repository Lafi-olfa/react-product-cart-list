import React from 'react';

export default function ProductCard({ data, addToCart, cart, removeFromCart }) {  
  if (!data) return <p>Loading...</p>;
  
  const generateProductId = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };
  
  const productId = generateProductId(data.name);
  const productInCart = cart.find(item => item.id === productId);
  
  const handleAddToCart = () => {
    addToCart(data); 
  };

  const handleIncrease = () => {
    addToCart(data);
  };

  const handleDecrease = () => {
    removeFromCart(productId);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={data.image.desktop} alt={data.name} />
        
        {productInCart ? (
          <div className="card-button">
            <button 
              className="remove-product" 
              onClick={(e) => {
                e.stopPropagation();
                handleDecrease();
              }}
            >
              -
            </button>
            <p className="products-quantity">{productInCart.quantity}</p>
            <button 
              className="add-product" 
              onClick={(e) => {
                e.stopPropagation();
                handleIncrease();
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button 
            className="card-button" 
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="Add to cart"/>
            Add to cart
          </button>
        )}
      </div>
      <div className="card-body">
        <span className="category">{data.category}</span>
        <h3 className="product-name">{data.name}</h3>
        <p className="price">${data.price.toFixed(2)}</p>        
      </div>
    </div>
  );
}