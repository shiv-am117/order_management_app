import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { AppRegistry } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground
        source={require("../../images/wool.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.head_text}>VARIETY GARMENTS</Text>
          </View>
          <TouchableOpacity
            style={styles.customer_order}
            onPress={() =>
              this.props.navigation.navigate("all_customer_orders")
            }
          >
            <Text style={styles.display_cust_text}>View all Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.order_given}
            onPress={() => this.props.navigation.navigate("all_orders_given")}
          >
            <Text style={styles.display_given_orders}>View Orders Given</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.add_customer_order}
            onPress={() => this.props.navigation.navigate("customer")}
          >
            <Text style={styles.new_text}>New Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.add_order_given}
            onPress={() => this.props.navigation.navigate("give_order")}
          >
            <Text style={styles.give_text}>Giving Order</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    backgroundColor: "white"
  },
  customer_order: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  order_given: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  add_customer_order: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  add_order_given: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  head_text: {
    fontSize: 30,

    fontFamily: "cursive"
  },
  display_cust_text: {
    fontSize: 30,
    backgroundColor: "#42e5f4",
    borderRadius: 15
  },
  display_given_orders: {
    fontSize: 30,
    backgroundColor: "#f4b241",
    borderRadius: 15
  },
  new_text: { fontSize: 30, backgroundColor: "#EE82EE", borderRadius: 15 },
  give_text: { fontSize: 30, backgroundColor: "pink", borderRadius: 15 },
  image: { width: null, height: null, flex: 1 }
});
export default Main;
