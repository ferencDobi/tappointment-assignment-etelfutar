import { combineReducers } from 'redux';
import { mealReducer as meals } from './mealReducer';
import { menuReducer as menu } from './menuReducer';
import { cartReducer as cart } from './cartReducer';
import { userReducer as user } from './userReducer';

const rootReducer = combineReducers({
  meals,
  menu,
  cart,
  user
});

export default rootReducer;
