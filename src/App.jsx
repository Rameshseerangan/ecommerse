import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import CartModal from './Components/CartModal';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} setModalOpen={setModalOpen} />
      <ProductList addToCart={addToCart} />
      {isModalOpen && (
        <CartModal cartItems={cartItems} removeFromCart={removeFromCart} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default App;
