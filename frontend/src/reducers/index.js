import { combineReducers } from 'redux';
import { mealReducer as meals } from './mealReducer';
import { menuReducer as menu } from './menuReducer';
import { cartReducer as cart } from './cartReducer';

const rootReducer = combineReducers({
  meals,
  menu,
  cart
});

export default rootReducer;
