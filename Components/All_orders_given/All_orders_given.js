import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";

class All_orders_given extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { name: "shivam", quantity: 100, date: "18/10/2018" },
        { name: "shiv", quantity: 1005, date: "19/10/2018" }
      ]
    };
  }

  render() {
    return (
      <View>
        {this.state.orders.map(each => (
          <View>
            <Text>{each.name}</Text>
            <Text>{each.quantity}</Text>
            <Text>{each.date}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default All_orders_given;
AppRegistry.registerComponent(All_orders_given, () => All_orders_given);
