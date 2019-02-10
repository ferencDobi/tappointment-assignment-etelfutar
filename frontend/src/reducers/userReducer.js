import * as actions from '../actions/actionConstants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
      case actions.LOG_USER_IN:
          return action.user;
      case actions.LOG_USER_OUT:
          return {};
      default:
          return state;
  }
};