import Cookies from 'js-cookie';
import * as actions from './actionConstants';
import UserApi from '../api/UserApi';

const logIn = cookie => {
  return { type: actions.LOG_USER_IN, cookie };
};

const logOut = () => {
  UserApi.invalidateSession();
  return { type: actions.LOG_USER_OUT };
};

const validationError = error => {
  return { type: actions.VALIDATION_ERROR, error };
}

const validateUser = formData => {
  return dispatch => {
    UserApi.validateUser(formData).then(({ data: user }) => {
      dispatch(logIn(Cookies.get('connect.sid')));
    }).catch(error => {
      dispatch(validationError(error));
    });
  }
}

const registrationError = error => {
  return { type: actions.REGISTRATION_ERROR, error };
}

const registerUser = ({ email, password }) => {
  return dispatch => {
    UserApi.saveUser({ email, password }).then(({ data: user }) => {
      dispatch(logIn(Cookies.get('connect.sid')));
    }).catch(error => {
      dispatch(registrationError(error));
    });
  }
}

export { validateUser, registerUser, logOut };