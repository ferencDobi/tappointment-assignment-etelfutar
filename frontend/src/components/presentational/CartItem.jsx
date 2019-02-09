import React from 'react';

export const CartItem = ({ item, className, action }) => (
  <div className={className + ' actionable'} onClick={() => action(item)}>
    <p>{item.name} x{item.amount}</p> 
    <p>{item.price * item.amount} Ft</p>
  </div>
);