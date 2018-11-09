import React, { Component } from "react";
import Main from "./Components/Main/Main";
import Customer from "./Components/Add_customer/Customer";
import All_orders_given from "./Components/All_orders_given/All_orders_given";
import Give_order from "./Components/Give_order/Give_order";
import All_customer_orders from "./Components/All_customer_orders/All_customer_orders";
import { createStackNavigator } from "react-navigation";
import { createStore } from "redux";
import allReducers from "./Reducers/index";
import action from "./actions/index";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const RootStack = createStackNavigator(
  {
    main: Main,
    all_orders_given: All_orders_given,
    all_customer_orders: All_customer_orders,
    give_order: Give_order,
    customer: Customer
  },
  {
    initialRouteName: "main"
  }
);
const persistConfig = {
  key: "root2",
  storage: storage
};
const pReducer = persistReducer(persistConfig, allReducers);

let store = createStore(pReducer);
const persistor = persistStore(store);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    );
  }
}
