import * as actions from '../actions/actionConstants';

export const menuReducer = (state = 'MainDish', action) => {
  switch(action.type) {
    case actions.SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
};
