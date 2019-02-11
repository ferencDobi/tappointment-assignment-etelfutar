import Cookies from 'js-cookie';
import * as actions from '../actions/actionConstants';

const initialState = Cookies.get('connect.sid') || '';

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
      case actions.LOG_USER_IN:
          return action.cookie;
      case actions.LOG_USER_OUT:
          return '';
      default:
          return state;
  }
};