import * as actions from '../actions/actionConstants';

export const uiReducer = (state = { cart: true }, action) => {
  switch(action.type) {
    case actions.TOGGLE_CART:
      return { ...state, cart: !state.cart };
    default:
      return state;
  }
};
