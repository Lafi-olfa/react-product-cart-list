// src/components/ProductCard.js
import React from 'react';

export default function ProductCard({data,addToCart}) {
 if(!data){
  <p>loading .....</p>
 }
  const handleAddToCart = () => {
    const id = data.name.toLowerCase().replace(/\s+/g, '-'); 
    addToCart({ ...data, id }); 
  };
  return (
  data &&   <div className="card">
      <div className="card-header">
        <img src={data.image.desktop} alt={data.name} />
         <button className="card-button" onClick={handleAddToCart}>
              <img src="/assets/images/icon-add-to-cart.svg" alt="Add to cart"/>
              Add to cart
            </button>
      </div>
       <div className="card-body">
            <span className="category">{data.category}</span>
            <h3 className="product-name">{data.name}</h3>
            <p className="price">${data.price.toFixed(2)}</p>        
            </div>
    </div>
  );
}