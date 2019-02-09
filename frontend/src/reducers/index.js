import { combineReducers } from 'redux';
import { mealReducer as meals } from './mealReducer';
import { menuReducer as menu } from './menuReducer';

const rootReducer = combineReducers({
  meals,
  menu
});

export default rootReducer;
