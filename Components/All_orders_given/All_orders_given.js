import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class All_orders_given extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.order_given_reducer.map(each => (
          <View key={each.id}>
            <Text>{each.name}</Text>
            <Text>{each.quantity}</Text>
            <Text>{each.date}</Text>
          </View>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    order_given_reducer: state.order_given_reducer
  };
}
export default connect(mapStateToProps)(All_orders_given);
