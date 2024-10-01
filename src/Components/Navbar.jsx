import React from 'react';

const Navbar = ({ cartCount, setModalOpen }) => {
  return (
    <nav className="navbar">
      <h1>MyShop</h1>
      <div className="cart-btn" onClick={() => setModalOpen(true)}>
        Cart {cartCount}
      </div>
    </nav>
  );
};

export default Navbar;
