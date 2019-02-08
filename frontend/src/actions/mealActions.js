import MenuApi from "../api/MenuApi";
import * as actions from './actionConstants';

const loadMeals = meals => {
  return { type: actions.LOAD_MEALS, meals };
};

export const fetchMeals = () => {
  return dispatch => {
    return MenuApi.fetchMeals().then(response => {
      dispatch(loadMeals(response.data));
    }).catch(error => console.error(error));
  };
};

export const fetchMealsByCategory = category => {
  return dispatch => {
    return MenuApi.fetchMealsByCategory(category).then(response => {
      dispatch(loadMeals(response.data));
    }).catch(error => console.error(error));
  };
};
