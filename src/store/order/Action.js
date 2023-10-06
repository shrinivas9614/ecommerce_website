export const CREATE_ORDER_REQUEST = "CREATE_ ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_ SUCCESS";
export const CREATE_ORDER_FALURE = "CREATE_ORDER _FALURE";

export const GET_ORDER_BY_ID_REQUEST = "GET_ORDER_BY_REQUEST";
export const GET_ORDER_BY_ID_SUCCESS = "GET_ORDER_BY_SUCCESS";
export const GET_ORDER_BY_ID_FALURE = "GET_ORDER_BY_FALURE";


export const GET_ORDER_HISTORY_BY_ID_REQUEST = "GET_ORDER_HISTORY_BY_REQUEST";
export const GET_ORDER_HISTORY_BY_ID_SUCCESS = "GET_ORDER_HISTORY_BY_SUCCESS";
export const GET_ORDER_HISTORY_BY_ID_FALURE = "GET_ORDER_HISTORY_BY_FALURE";


// import axios from "axios";
// import {
//   CREATE_ORDER_SUCCESS,
//   CREATE_ORDER_REQUEST,
//   CREATE_ORDER_FALURE,
//   GET_ORDER_BY_ID_REQUEST,
//   GET_ORDER_BY_ID_SUCCESS,
//   GET_ORDER_BY_ID_FALURE,
// } from "./ActionType";

// import api, { API_BASE_URL } from "../../Config/ApiConfig";

// export const createOrder = (reqData) => async (dispatch) => {
//   dispatch({ CREATE_ORDER_REQUEST });
//   try {
//     const { data } = await api.post("api/orders/", reqData.address);
//     if (data.id) {
//       reqData.navigate({ search: `step=3&order_id=${data.id}` });
//     }
//     console.log("create order", data);
//     dispatch({
//       type: CREATE_ORDER_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log("error", error);
//     dispatch({
//       dispatch: CREATE_ORDER_FALURE,
//       payload: error.message,
//     });
//   }
// };

// export const getOrderById = (orderId) => async (dispatch) => {
//   dispatch({ GET_ORDER_BY_ID_REQUEST });
//   try {
//     const { data } = await api.get(`api/order/${orderId}`);
//     console.log("order by id", data);
//     dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
//   } catch (error) {
//     console.log("order by id is not found", error);
//     dispatch({ type: GET_ORDER_BY_ID_FALURE, payload: error.message });
//   }
// };
