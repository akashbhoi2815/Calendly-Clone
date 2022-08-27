import * as types from "./actionTypes";
import { auth } from "../firebase";

const signupRequest = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};
const signupSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: user,
  };
};
const signupFailure = (error) => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: error,
  };
};

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
  };
};

const logoutRequest = () => {
  return {
    type: types.LOGOUT_REQUEST,
  };
};
const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
const logoutFailure = (error) => {
  return {
    type: types.LOGOUT_FAILURE,
    payload: error,
  };
};

export const setUser =(user)=>{
  return{
   type:types.SET_USER,
   payload:user
  }
}

export const signupInit = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(signupRequest());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(signupSuccess(user));
      })
      .catch((error) => dispatch(signupFailure(error)));
  };
};

export const loginInit = (email, password) => {
  return function (dispatch) {
    dispatch(loginRequest());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFailure(error.massage)));
  };
};

export const logoutInit = () => {
  return function (dispatch) {
    dispatch(logoutRequest());
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFailure(error.massage)));
  };
};
