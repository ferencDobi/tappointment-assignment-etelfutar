import * as actions from '../actions/actionConstants';

export const menuReducer = (state = '', action) => {
  switch(action.type) {
    case actions.SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
};
