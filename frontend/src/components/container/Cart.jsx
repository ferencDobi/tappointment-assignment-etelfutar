import React from 'react';
import { connect } from 'react-redux';
import { Note } from '../presentational/Note';
import { CartItem } from '../presentational/CartItem';

const Cart = ({ cart, total }) => {
  return (
    <Note title="Rendelés">
      {cart.map((item, i) => <CartItem key={'item-' + i} item={item} className="text-line" />)}
      <div className="text-line">
        <p>{total} Ft</p>
      </div>
    </Note>
  );
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
    total: cart.reduce((total, item) => total + item.price * item.amount, 0)
  };
};

export default connect(mapStateToProps)(Cart);