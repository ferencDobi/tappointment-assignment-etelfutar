import * as actions from '../actions/actionConstants';

export const mealReducer = (state = [], action) => {
  switch(action.type) {
    case actions.LOAD_MEALS:
      return action.meals;
    default:
      return state;
  }
};
