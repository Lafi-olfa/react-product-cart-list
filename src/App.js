import './App.css';
import ProductList from './components/productList';
import Cart from './components/cart';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('orderCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
  localStorage.setItem('orderCart', JSON.stringify(cart));
}, [cart]);


  const generateProductId = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  function addToCart(product) {  
    setCart(prevCart => {
      const id = generateProductId(product.name); // Génère l'ID ici
      const existingProduct = prevCart.find(item => item.id === id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {      
        return [...prevCart, { ...product, id, quantity: 1 }]; // Ajoute l'ID
      }
    });
  }
const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      
      if (existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      
      return prevCart.filter(item => item.id !== productId);
    });
  };


  return (
    <div id="container">
   <ProductList addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>
      <Cart cart={cart} addToCart={addToCart} />
    </div>
  );
}

export default App;