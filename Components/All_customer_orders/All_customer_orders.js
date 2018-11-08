import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { connect } from "react-redux";

class All_customer_orders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: "black" }}>
          {this.props.customer_orders_reducer.map(each => (
            <View key={each.id}>
              <TouchableOpacity style={styles.item}>
                <Text>Name : {each.name}</Text>
                <Text>Number : {each.number}</Text>
                <Text>Money : Rs. {each.money}</Text>
                <Text>Indate :{each.indate}</Text>
                <Text>outdate :{each.outdate}</Text>
                <Text>Order :{each.order}</Text>
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
    customer_orders_reducer: state.customer_orders_reducer
  };
}
export default connect(mapStateToProps)(All_customer_orders);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "pink"
  }
});
