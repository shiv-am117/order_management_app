import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
  state = {
    value: ""
  };

  search = text => {
    this.setState({
      value: text
    });
  };
  render() {
    let filteredcust = this.props.orders.filter(cust => {
      return cust.name.indexOf(this.state.value) != -1;
    });
    return (
      <ScrollView>
        <TextInput
          style={styles.search}
          placeholder="Type to search"
          onChangeText={text => this.search(text)}
        />
        <View style={styles.container}>
          {filteredcust.map(each => (
            <View key={each.id}>
              <View style={styles.item}>
                <Text>Name : {each.name}</Text>
                <Text>Quantity : {each.quantity} grams</Text>
                <Text>Date : {each.date}</Text>
                <Text style={styles.modlineheight}>{"\n"}</Text>
                <View style={styles.buttoncontainer}>
                  <TouchableOpacity style={styles.envelope}>
                    <Text style={styles.button}>Edit</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.envelope}
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
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center"
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
  },
  envelope: {
    flex: 1
  },
  search: {
    padding: 10
  }
});
