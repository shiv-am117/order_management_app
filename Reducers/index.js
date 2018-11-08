import { combineReducers } from "redux";
import customer_orders_reducer from "./reducer_customer_orders";
import order_given_reducer from "./reducer_ordergiven";

const allReducers = combineReducers({
  customer_orders_reducer,
  order_given_reducer
});

export default allReducers;
