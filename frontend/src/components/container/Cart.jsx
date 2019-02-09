import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Note } from '../presentational/Note';
import { CartItem } from '../presentational/CartItem';
import { removeFromCart } from '../../actions/cartActions';

const Cart = ({ cart, total, removeFromCart }) => {
  return (
    <Fragment>
      <Note title="Rendelés">
        {cart.slice(0, 10).map((item, i) => 
          <CartItem key={'item-' + i} className="text-line"
                    item={item} action={removeFromCart} />)}
        {cart.length <= 10 && <div className="text-line end"><p>{total} Ft</p></div>}
      </Note>
      {cart.length > 10 && <Note className="second">
        {cart.slice(10).map((item, i) =>
          <CartItem key={'item-' + i + 10} className="text-line"
                    item={item} action={removeFromCart} />)}
          <div className="text-line end"><p>{total} Ft</p></div>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);