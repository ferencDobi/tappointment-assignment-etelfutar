import * as actions from '../actions/actionConstants';

export const cartReducer = (state = [], action) => {
  switch(action.type) {
    case actions.ADD_TO_CART:
      const { item } = action;

      const itemInCart = state.find(cartItem => cartItem.id === item.id);

      if (itemInCart) {
        return state.map(cartItem => {
          if (cartItem.id === item.id) 
            return {...cartItem, amount: cartItem.amount + 1};
          else return cartItem;
        });
      } else {
        const { id, name, price } = item;
        return state.concat({ id, name, price, amount: 1 });
      }

    default:
      return state;
  }
};
