import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";

class All_customer_orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          name: "shivam",
          number: 100,
          money: 100,
          indate: "18/10/2018",
          outdate: "18/10/2018"
        },
        {
          name: "shiv",
          number: 1001,
          money: 1001,
          indate: "18/10/2018",
          outdate: "18/10/2018"
        }
      ]
    };
  }

  render() {
    return (
      <View>
        {this.state.orders.map(each => (
          <View>
            <Text>{each.name}</Text>
            <Text>{each.number}</Text>
            <Text>{each.money}</Text>
            <Text>{each.indate}</Text>
            <Text>{each.outdate}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default All_customer_orders;
AppRegistry.registerComponent(All_customer_orders, () => All_customer_orders);
