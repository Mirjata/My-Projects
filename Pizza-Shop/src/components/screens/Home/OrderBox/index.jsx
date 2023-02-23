import React from 'react';
import './styles.css';

const OrderBox = ({ order, total }) => (
  <div className="order-box">
    <h3>ORDER</h3>
    {order.map((pizza, i) => (
      <div key={i} className="order-box-item">
        <p className="item-title">{pizza?.title}</p>
        <p className="item-qty">x {pizza?.qty}</p>
        <p>{pizza?.type ? pizza?.type : 'Regular'}</p>
        <p className="item-price">{pizza?.price}</p>
      </div>
    ))}
    <div>Total: {total}</div>
  </div>
);

export default OrderBox;
