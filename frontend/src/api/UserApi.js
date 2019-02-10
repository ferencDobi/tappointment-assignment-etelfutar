import api from './connection';
import { formToUser } from '../helpers/utilities';

const UserApi = {
  saveUser: formData => {
    const user = formToUser(formData);

    return api.post('/register', JSON.stringify(user));
  },

  validateUser: formData => {
    const user = formToUser(formData);

    return api.post('/authenticate', JSON.stringify(user));
  }
};

export default UserApi;