import axios from "axios";
import { API_BASE_URL } from "../../Config/ApiConfig";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

// get token

const token = localStorage.getItem("jwt");

// register
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFalure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    console.log("user", user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFalure(error.message));
  }
};

// login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFalure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user", user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFalure(error.message));
  }
};

// get_user

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFalure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const get_user = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log("user", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFalure(error.message));
  }
};

// logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER, payload: null });
  localStorage.clear();
};
