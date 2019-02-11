import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Note } from '../presentational/Note';
import { CartItem } from '../presentational/CartItem';
import { CartFooter } from '../presentational/CartFooter';
import { removeFromCart } from '../../actions/cartActions';
import { logOut } from '../../actions/userActions';

const Cart = ({ cart, total, removeFromCart, logOut }) => {
  return (
    <Fragment>
      <Note title="Rendelés">
        {cart.slice(0, 10).map((item, i) => 
          <CartItem key={'item-' + i} className="text-line"
                    item={item} action={removeFromCart} />)}
        {cart.length <= 10 && 
          <CartFooter total={total} action={{ handler: logOut, name: 'Kijelentkezés' }} />}
      </Note>
      {cart.length > 10 && <Note className="second">
        {cart.slice(10).map((item, i) =>
          <CartItem key={'item-' + i + 10} className="text-line"
                    item={item} action={removeFromCart} />)}
        <CartFooter total={total} action={{ handler: logOut, name: 'Kijelentkezés' }} />
      </Note>}
    </Fragment>
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
    },
    
    logOut: () => {
      dispatch(logOut());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);