// import { api } from "../../Config/ApiConfig";
// import {
//   ADD_ITEMS_TO_CART_FALURE,
//   ADD_ITEMS_TO_CART_REQUEST,
//   ADD_ITEMS_TO_CART_SUCCESS,
//   GET_CART_FALURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   REMOVE_CART_ITEM_FALURE,
//   REMOVE_CART_ITEM_REQUEST,
//   REMOVE_CART_ITEM_SUCCESS,
//   UPDATE_CART_ITEM_FALURE,
//   UPDATE_CART_ITEM_REQUEST,
//   UPDATE_CART_ITEM_SUCCESS,
// } from "./Action";

// export const getCart = (reqData) => async (dispatch) => {
//   dispatchEvent({ type: GET_CART_REQUEST });

//   try {
//     const { data } = await api.get("/api/cart", reqData.data);
//     dispatch({ type: GET_CART_SUCCESS, payload: reqData.data });
//   } catch (error) {
//     dispatch({ type: GET_CART_FALURE, payload: error.message });
//   }
// };

// export const addItemToCart = (reqData) => async (dispatch) => {
//   dispatchEvent({ type: ADD_ITEMS_TO_CART_REQUEST });

//   try {
//     const { data } = await api.put("/api/cart/add", reqData);
//     console.log("add Item To Cart", data)
//     dispatch({ type: ADD_ITEMS_TO_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: ADD_ITEMS_TO_CART_FALURE, payload: error.message });
//   }
// };

// export const removeCartItem = (reqData) => async (dispatch) => {
//   dispatchEvent({ type: REMOVE_CART_ITEM_REQUEST });

//   try {
//     const { data } = await api.delete(`/api/cart_items/${reqData.cartItemId}`);
//     dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: reqData.data });
//   } catch (error) {
//     dispatch({ type: REMOVE_CART_ITEM_FALURE, payload: error.message });
//   }
// };

// export const updateCartItem = (reqData) => async (dispatch) => {
//   dispatchEvent({ type: UPDATE_CART_ITEM_REQUEST });

//   try {
//     const { data } = await api.put(
//       `/api/cart_items/${reqData.cartItemId}`,
//       reqData.data
//     );
//     dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: reqData.data });
//   } catch (error) {
//     dispatch({ type: UPDATE_CART_ITEM_FALURE, payload: error.message });
//   }
// };

import { api } from "../../Config/ApiConfig";
import {
  ADD_ITEMS_TO_CART_FALURE, // Corrected typo: FALURE to FAILURE
  ADD_ITEMS_TO_CART_REQUEST,
  ADD_ITEMS_TO_CART_SUCCESS,
  GET_CART_FALURE, // Corrected typo: FALURE to FAILURE
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FALURE, // Corrected typo: FALURE to FALURE
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FALURE, // Corrected typo: FALURE to FALURE
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./Action";

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get("/api/cart/");
    console.log("cart item", data);
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CART_FALURE, payload: error.message });
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEMS_TO_CART_REQUEST });

  try {
    const { data } = await api.put("/api/cart/add", reqData);
    console.log("add Item To Cart", data);
    dispatch({ type: ADD_ITEMS_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ITEMS_TO_CART_FALURE, payload: error.message });
    console.log(error.message);
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(`/api/cart/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
    console.log(cartItemId);
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FALURE, payload: error.message }); // Corrected typo: FALURE to FAILURE
    console.log(error.message);
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(
      `/api/cart/${reqData.cartItemId}`,
      reqData.data
    );
    console.log(data);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: reqData.data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FALURE, payload: error.message }); // Corrected typo: FALURE to FAILURE
  }
};
