import React from 'react';
import { connect } from 'react-redux';
import { Note } from '../presentational/Note';
import { CartItem } from '../presentational/CartItem';
import { removeFromCart } from '../../actions/cartActions';

const Cart = ({ cart, total, removeFromCart }) => {
  return (
    <Note title="Rendelés">
      {cart.map((item, i) => 
        <CartItem key={'item-' + i} className="text-line"
                  item={item} action={removeFromCart} />)}
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

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: item => {
      dispatch(removeFromCart(item));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);