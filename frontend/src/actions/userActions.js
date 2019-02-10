import * as actions from './actionConstants';
import UserApi from '../api/UserApi';

const logIn = user => {
  return { type: actions.LOG_USER_IN, user };
};

const logOut = () => {
  return { type: actions.LOG_USER_OUT };
};

const validationError = error => {
  return { type: actions.VALIDATION_ERROR, error };
}

const validateUser = formData => {
  return dispatch => {
    UserApi.validateUser(formData).then(({ data: user }) => {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(logIn(user));
    }).catch(error => {
      dispatch(validationError(error));
    });
  }
}

const registrationError = error => {
  return { type: actions.REGISTRATION_ERROR, error };
}

const registerUser = formData => {
  return dispatch => {
    UserApi.saveUser(formData).then(({ data: user }) => {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(logIn(user));
    }).catch(error => {
      dispatch(registrationError(error));
    });
  }
}

export { validateUser, registerUser, logOut };