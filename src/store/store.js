import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducers";
import { customrtProductReducer } from "./Product/Reducers";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./order/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  products: customrtProductReducer,
  cart: cartReducer,
  order: orderReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
