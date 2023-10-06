import { api } from "../../Config/ApiConfig";
import {
  FIND_PRODUCT_BY_ID_FALURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FALURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";

export const findProduct = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    console.log("data", data);
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_FALURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;

  try {
    const { data } = await api.get(`api/products/id/${productId}`);
    console.log(" data", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FALURE, payload: error.message });
  }
};
