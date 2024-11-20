import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';
import './cart.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <div>
    <Navbar />
    <div className="cart-container">
    {totalItems === 0 ? (
        <div className="empty-cart-message">
          <h2>Your cart is empty</h2>
          <p>Hurry up,It’s a great time to fill your cart with amazing offers!</p>
        </div>
      ) : (
        <>
   

      {items.map((item) => (
        <div key={item.id} className="product-detail">
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-info">
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <h4>Total Items: {items.reduce((acc, item) => acc + item.quantity, 0)}</h4>
        <h4>Total Price: ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h4>
       
      </div>
      </>
      )}
    </div>
<Footer/>
    </div>
    
  );
};

export default Cart;
