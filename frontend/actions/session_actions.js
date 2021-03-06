import { login, logout, signup } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

//TODO RECEIVE ERRORS????

export const loginUser = user => dispatch => (
    login(user).then(res => dispatch(receiveCurrentUser(res)))
);

export const signupUser = user => dispatch => (
    signup(user).then(res => dispatch(receiveCurrentUser(res)))
);

export const logoutUser = () => dispatch => (
    logout().then(() => dispatch(logoutCurrentUser()))
);
