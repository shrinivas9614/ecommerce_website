// CREATE_ORDER_REQUEST
// CREATE_ORDER_SUCCESS
// CREATE_ORDER_FALURE

import {
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FALURE, // Corrected typo to FALURE
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_FALURE, // Corrected typo to FALURE
} from "./Action";

import { api } from "../../Config/ApiConfig";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST }); // Corrected dispatch action
  try {
    const { data } = await api.post(`/api/orders/`, reqData.address);
    if (data.id) {
      reqData.navigate({ search: `step=3&order_id=${data.id}` });
    }
    console.log("create order", data.id);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("create order error", error);
    dispatch({
      type: CREATE_ORDER_FALURE, // Corrected action type
      payload: error.message,
    });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST }); // Corrected dispatch action
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("order data", data);
    console.log("order by id", data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_BY_ID_FALURE, payload: error.message });; // Corrected action type
    console.log("order by id is not found", error);
  }
};
