import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AppRegistry } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.head_text}>VARIETY GARMENTS</Text>
        </View>
        <TouchableOpacity
          style={styles.customer_order}
          onPress={() => this.props.navigation.navigate("all_customer_orders")}
        >
          <Text style={styles.display_text}>View all Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.order_given}
          onPress={() => this.props.navigation.navigate("all_orders_given")}
        >
          <Text style={styles.display_text}>View Orders Given</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.add_customer_order}
          onPress={() => this.props.navigation.navigate("customer")}
        >
          <Text style={styles.add_text}>New Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.add_order_given}
          onPress={() => this.props.navigation.navigate("give_order")}
        >
          <Text style={styles.add_text}>Giving Order</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1
  },
  heading: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  customer_order: {
    flexDirection: "column",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  order_given: {
    flexDirection: "column",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  add_customer_order: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  add_order_given: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  head_text: { fontSize: 30 },
  display_text: { fontSize: 30 },
  add_text: { fontSize: 30 }
});
export default Main;

AppRegistry.registerComponent(Main, () => Main);
