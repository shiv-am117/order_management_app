import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { del_cust_order, updatemade, updategiven } from "../../actions/index";

class All_customer_orders extends Component {
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
          placeholder="type to search"
          onChangeText={text => this.search(text)}
        />
        <View style={styles.container}>
          {filteredcust.map(each => (
            <View key={each.id}>
              <View
                style={
                  each.made === true
                    ? styles.made
                    : each.given === true
                    ? styles.given
                    : styles.not_given
                }
              >
                <Text>Name : {each.name}</Text>
                <Text>Number : {each.number}</Text>
                <Text>Money : Rs. {each.money}</Text>
                <Text>Indate :{each.indate}</Text>
                <Text>outdate :{each.outdate}</Text>
                <Text>Order :{each.order}</Text>

                <Text style={styles.modlineheight}>{"\n"}</Text>
                <View style={styles.buttoncontainer}>
                  <TouchableOpacity style={styles.envelope}>
                    <Text style={styles.button}>Edit</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.envelope}
                    onPress={() => this.props.updategiven(each.id)}
                  >
                    <Text style={styles.button}>
                      {each.given === true ? "Not Given" : "Given"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.envelope}
                    onPress={() => this.props.updatemade(each.id)}
                  >
                    <Text style={styles.button}>
                      {each.made === true ? "Not Made" : "Made"}
                    </Text>
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
All_customer_orders.propTypes = {
  del_order: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  updategiven: PropTypes.func.isRequired,
  updatemade: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    orders: state.customer_orders_reducer.items
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      del_order: del_cust_order,
      updatemade: updatemade,
      updategiven: updategiven
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(All_customer_orders);

const styles = StyleSheet.create({
  not_given: {
    backgroundColor: "pink",
    padding: 15,
    flex: 1
  },
  given: {
    backgroundColor: "yellow",
    padding: 15,
    flex: 1
  },
  made: {
    backgroundColor: "#00ff00",
    padding: 15,
    flex: 1
  },
  button: {
    backgroundColor: "cyan",
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center"
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
  }
});
