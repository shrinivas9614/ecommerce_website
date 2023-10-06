import {
  ADD_ITEMS_TO_CART_FALURE,
  ADD_ITEMS_TO_CART_REQUEST,
  ADD_ITEMS_TO_CART_SUCCESS,
  GET_CART_FALURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FALURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FALURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./Action";

const initialState = { cart: null, loading: false, error: null, cartItem: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_ITEMS_TO_CART_SUCCESS:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload.cartItems],
        loading: false,
      };
    case ADD_ITEMS_TO_CART_FALURE:
      return { ...state, loading: false, error: action.payload };
    case GET_CART_REQUEST:
      return { ...state, loading: true, error:null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItem: action.payload.cartItem,
        cart: action.payload,
        loading: false,
      };
    case GET_CART_FALURE:
      return { ...state, error: action.payload, loading: false };
    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true,error:null };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        deleteCartItem: action.payload,
        loading: false,
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        updateCartItem: action.payload,
        loading: false,
      };
    case REMOVE_CART_ITEM_FALURE:
    case UPDATE_CART_ITEM_FALURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
