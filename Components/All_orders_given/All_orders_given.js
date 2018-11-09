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
import { del_order } from "../../actions/index";

class All_orders_given extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.orders);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.orders.map(each => (
            <View key={each.id}>
              <View style={styles.item}>
                <Text>Name : {each.name}</Text>
                <Text>Quantity : {each.quantity} grams</Text>
                <Text>Date : {each.date}</Text>
                <Text style={styles.modlineheight}>{"\n"}</Text>
                <View style={styles.buttoncontainer}>
                  <TouchableOpacity>
                    <Text style={styles.button}>Edit</Text>
                  </TouchableOpacity>
                  <Text>{"          "} </Text>
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
All_orders_given.propTypes = {
  del_order: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    orders: state.order_given_reducer.items
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      del_order: del_order
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(All_orders_given);

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
