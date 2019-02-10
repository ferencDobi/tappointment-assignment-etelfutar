import api from './connection';

const UserApi = {
  saveUser: formData => {
    return api.post('/register', JSON.stringify(formData));
  },

  validateUser: formData => {
    return api.post('/authenticate', JSON.stringify(formData));
  }
};

export default UserApi;