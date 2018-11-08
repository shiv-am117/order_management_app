import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { AppRegistry } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class All_orders_given extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: "black" }}>
          {this.props.order_given_reducer.map(each => (
            <View key={each.id}>
              <TouchableOpacity style={styles.item}>
                <Text>Name : {each.name}</Text>
                <Text>Quantity : {each.quantity} kg</Text>
                <Text>Date : {each.date}</Text>
              </TouchableOpacity>
              <Text>{"\n"}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    order_given_reducer: state.order_given_reducer
  };
}

export default connect(mapStateToProps)(All_orders_given);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "pink"
  }
});
