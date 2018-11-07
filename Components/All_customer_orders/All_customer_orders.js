import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class All_customer_orders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.customer_orders_reducer.map(each => (
          <View key={each.id}>
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
function mapStateToProps(state) {
  return {
    customer_orders_reducer: state.customer_orders_reducer
  };
}
export default connect(mapStateToProps)(All_customer_orders);
