import api from './connection';

const UserApi = {
  saveUser: formData => {
    return api.post('/auth/register', JSON.stringify(formData));
  },

  validateUser: formData => {
    return api.post('/auth/login', JSON.stringify(formData));
  }
};

export default UserApi;