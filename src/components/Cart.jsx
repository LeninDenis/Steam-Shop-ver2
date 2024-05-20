import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Количество: {item.quantity}</span>
            <span>Цена: {item.price} тг</span>
          </li>
        ))}
      </ul>
      <button>Оформить заказ</button>
    </div>
  );
}

export default Cart;
