// src/components/ProductList.js

import { useEffect, useState } from "react";
import ProductCard from "./productCard";

export default function ProductList({addToCart}) {
 const [products, setProducts]= useState([]);
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          return;
        }
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        console.error('Error loading products:', err);
      } finally {
        return;
      }
    };

    fetchData();
  }, []);

  if(products.length===0){
   return <p>Loading....</p>
  }

  return (
    <div id="products-container">
      <h1>Desserts</h1>
    {
      products.map((product, index)=> 
      <ProductCard key={index} addToCart={addToCart} data={product}/>
    )
    }
    </div>
  );
}