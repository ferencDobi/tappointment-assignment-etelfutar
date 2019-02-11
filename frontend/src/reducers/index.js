import { combineReducers } from 'redux';
import { mealReducer as meals } from './mealReducer';
import { menuReducer as menu } from './menuReducer';
import { cartReducer as cart } from './cartReducer';
import { sessionReducer as session } from './sessionReducer';

const rootReducer = combineReducers({
  meals,
  menu,
  cart,
  session
});

export default rootReducer;
