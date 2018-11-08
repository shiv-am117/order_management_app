import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";
import { Button } from "react-native";
import DatePicker from "react-native-datepicker";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { order_given } from "../../actions/index";

class Give_order extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    quantity: "",
    date: "",
    message: ""
  };

  nav = () => {
    this.props.navigation.navigate("main");
  };
  giveorder = () => {
    if (
      this.state.name === "" ||
      this.state.quantity === "" ||
      this.state.date === ""
    ) {
      this.setState({ message: "Fill all of above" });
    } else {
      this.nav();
      this.props.order_given(this.state);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter name !"
          onChangeText={text => this.setState({ name: text })}
        />

        <TextInput
          style={{ height: 40 }}
          keyboardType="numeric"
          placeholder="Enter quantity !"
          onChangeText={text => this.setState({ quantity: text })}
        />

        <View>
          <Text style={{ fontSize: 13 }}>date:</Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="05-11-2018"
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
        </View>
        <Text>{"\n"}</Text>
        <Button title="Give Order" color="#841584" onPress={this.giveorder} />
        <Text>{"\n"}</Text>
        <Button
          title="Cancel"
          color="red"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={{ color: "red", fontSize: 20 }}>{this.state.message}</Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    order_given_reducer: state.order_given_reducer
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      order_given: order_given
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Give_order);
