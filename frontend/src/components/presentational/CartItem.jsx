import React from 'react';

export const CartItem = ({ item, className }) => (
  <div className={className}>
    <p>{item.name} x{item.amount}</p> 
    <p>{item.price} Ft</p>
  </div>
);