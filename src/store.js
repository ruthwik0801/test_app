import { createStore, combineReducers } from "redux";
import homeReducer from "./reducers/home";

// we can combine multiple reducers using combineReducers, now we had 1, so idoenst matter if we use this or not
export default createStore(
  combineReducers({
    homeReducer
  })
);
