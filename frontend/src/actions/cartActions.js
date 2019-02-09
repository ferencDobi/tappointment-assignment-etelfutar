import * as actions from './actionConstants';

const addToCart = item => {
  return { type: actions.ADD_TO_CART, item };
};

export { addToCart };