import api from './connection';

const UserApi = {
  pingServer: () => {
    return api.get('/');
  },

  saveUser: formData => {
    return api.post('/auth/register', JSON.stringify(formData));
  },

  validateUser: formData => {
    return api.post('/auth/login', JSON.stringify(formData));
  },

  invalidateSession: () => {
    return api.get('/auth/logout');
  }
};

export default UserApi;