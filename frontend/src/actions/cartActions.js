import * as actions from './actionConstants';

const addToCart = item => {
  return { type: actions.ADD_TO_CART, item };
};

const removeFromCart = item => {
  return { type: actions.REMOVE_FROM_CART, item };
}

export { addToCart, removeFromCart };