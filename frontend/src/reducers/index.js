import {combineReducers} from 'redux';
import {mealReducer as meals} from "./mealReducer";

const rootReducer = combineReducers({
  meals
});

export default rootReducer;
