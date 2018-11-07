import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";
import { Button } from "react-native";
import DatePicker from "react-native-datepicker";

class Customer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    number: null,
    order: "",
    money: null,
    indate: null,
    outdate: null
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
        <Button
          title="Add Order"
          color="#841584"
          onPress={() => this.updatechild}
        />
        <Text>{"\n"}</Text>
        <Button
          title="Cancel"
          color="red"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Customer;
AppRegistry.registerComponent(Customer, () => Customer);
