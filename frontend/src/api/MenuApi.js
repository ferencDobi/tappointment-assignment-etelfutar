import api from './connection';

const MenuApi = {
  fetchMeals: () => {
    return api.get('/menu');
  },

  fetchMealsByCategory: category => {
    return api.get(`/menu?category=${category}`);
  },
};

export default MenuApi;
