import React, { Component } from "react";

import Main from "./Components/Main/Main";
import Customer from "./Components/Add_customer/Customer";
import { AppRegistry } from "react-native";
import All_orders_given from "./Components/All_orders_given/All_orders_given";
import Give_order from "./Components/Give_order/Give_order";
import All_customer_orders from "./Components/All_customer_orders/All_customer_orders";
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    main: Main,
    customer: Customer,
    all_orders_given: All_orders_given,
    give_order: Give_order,
    all_customer_orders: All_customer_orders
  },
  {
    initialRouteName: "main"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent(App, () => App);
