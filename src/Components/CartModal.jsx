import React from 'react';

const CartModal = ({ cartItems, removeFromCart, setModalOpen }) => {
  return (
    <div className="modal">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={() => setModalOpen(false)}>Close</button>
    </div>
  );
};

export default CartModal;
