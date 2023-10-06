import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FALURE, // Corrected typo
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_FALURE, // Corrected typo
} from "./Action";

const initialState = {
  orders: [],
  order: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, error: null, loading: true };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
        order: action.payload,
      };
    case CREATE_ORDER_FALURE: // Corrected action type
      return { ...state, loading: false, error: action.payload };
    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, loading: false, order: action.payload, error: null };
    case GET_ORDER_BY_ID_FALURE: // Corrected action type
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
