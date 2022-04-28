import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "../theme/base";
import createAccountStyles from "../theme/account";
import header from "../theme/header";

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={createAccountStyles.container}>
        <Image style={createAccountStyles.logo} source={require("../assets/ninja.png")} />
        <Text style={createAccountStyles.logoText}>Create Account</Text>
        <View style={createAccountStyles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => this.setState({email: email})}
            value={this.email}
          />
        </View>
      </View>
    );
  }
}
