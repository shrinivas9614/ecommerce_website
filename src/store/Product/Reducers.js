import {
  FIND_PRODUCT_BY_ID_FALURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FALURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: null,
};

export const customrtProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FIND_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload,
      };

    case FIND_PRODUCT_FALURE:
    case FIND_PRODUCT_BY_ID_FALURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
