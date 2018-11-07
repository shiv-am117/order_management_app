import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { AppRegistry } from "react-native";
import { Button } from "react-native";
import DatePicker from "react-native-datepicker";

class Give_order extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    quantity: null,
    date: null
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
        <Button title="Give Order" color="#841584" />
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

export default Give_order;
AppRegistry.registerComponent(Give_order, () => Give_order);
