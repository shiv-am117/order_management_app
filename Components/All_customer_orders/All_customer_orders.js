import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { del_cust_order } from "../../actions/index";

class All_customer_orders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.orders.map(each => (
            <View key={each.id}>
              <View style={styles.item}>
                <Text>Name : {each.name}</Text>
                <Text>Number : {each.number}</Text>
                <Text>Money : Rs. {each.money}</Text>
                <Text>Indate :{each.indate}</Text>
                <Text>outdate :{each.outdate}</Text>
                <Text>Order :{each.order}</Text>
                <Text style={styles.modlineheight}>{"\n"}</Text>
                <View style={styles.buttoncontainer}>
                  <TouchableOpacity>
                    <Text style={styles.button}>Edit</Text>
                  </TouchableOpacity>
                  <Text>{"          "} </Text>
                  <TouchableOpacity>
                    <Text style={styles.button}>Given</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.button}>Made</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.del_order(each.id)}
                  >
                    <Text style={styles.button}>Completed</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.modlineheight}>{"\n"}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
All_customer_orders.propTypes = {
  del_order: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    orders: state.customer_orders_reducer.items
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators({ del_order: del_cust_order }, dispatch);
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(All_customer_orders);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "pink",
    padding: 15,
    flex: 1
  },
  button: {
    backgroundColor: "cyan",
    flex: 1,
    borderRadius: 10
  },
  buttoncontainer: {
    flexDirection: "row",
    flex: 1
  },
  container: {
    backgroundColor: "white"
  },
  modlineheight: {
    lineHeight: 1
  }
});
