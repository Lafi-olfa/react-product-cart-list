import './App.css';
import ProductList from './components/productList';
import Cart from './components/cart';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart]= useState([])

  useEffect(() => {
  localStorage.setItem('orderCart', JSON.stringify(cart));
}, [cart]);


function addToCart(product) {  
  setCart(prevCart => {
    const existingProduct = prevCart.find(item => item.id === product.id);    
    if (existingProduct) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {      
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
}



  return (
    <div id="container">
   <ProductList addToCart={addToCart}/>
   <Cart/>
    </div>
  );
}

export default App;