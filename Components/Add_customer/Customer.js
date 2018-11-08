import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";
import { Button } from "react-native";
import DatePicker from "react-native-datepicker";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { neworder } from "../../actions/index";

class Customer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    number: "",
    order: "",
    money: "",
    indate: "",
    outdate: "",
    message: ""
  };

  nav = () => {
    this.props.navigation.navigate("main");
  };
  order = () => {
    if (
      this.state.name === "" ||
      this.state.number === "" ||
      this.state.order === "" ||
      this.state.money === "" ||
      this.state.outdate === "" ||
      this.state.indate === ""
    ) {
      this.setState({ message: "Fill all of above" });
    } else {
      this.nav();
      this.props.neworder(this.state);
    }
  };
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter customer name !"
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          style={{ height: 40 }}
          keyboardType="numeric"
          placeholder="Enter phone number !"
          onChangeText={text => this.setState({ number: text })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter order !"
          onChangeText={text => this.setState({ order: text })}
        />
        <TextInput
          style={{ height: 40 }}
          keyboardType="numeric"
          placeholder="Enter advance money  !"
          onChangeText={text => this.setState({ money: text })}
        />
        <View>
          <Text style={{ fontSize: 13 }}>Indate:</Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.indate}
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
              this.setState({ indate: date });
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 13 }}>Outdate:</Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.outdate}
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
              this.setState({ outdate: date });
            }}
          />
        </View>
        <Text>{"\n"}</Text>
        <Button title="Add Order" color="#841584" onPress={this.order} />
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
    customer_orders_reducer: state.customer_orders_reducer
  };
}

function matchDipatchToProps(dispatch) {
  return bindActionCreators(
    {
      neworder: neworder
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDipatchToProps
)(Customer);
