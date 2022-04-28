import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import styles from "../theme/base";
import createAccountStyles from "../theme/account";
import axios from 'axios';

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }

  render() {

    const signInButton = () => {
      if (this.state.isLoading) {
        return (
          <Image style={styles.spinner} source={require("../assets/spinner.gif")} />
        )
      } else {
        return (
          <Text style={{ ...styles.cDark, ...styles.buttonText }}>SIGN IN</Text>
        )
      }
    }

    return (
      <View style={createAccountStyles.container}>
        <Ionicons style={styles.pageIcon} name="md-people-circle-outline" size={96} color="white" />
        <Text style={createAccountStyles.logoText}>Create Account</Text>
        <View style={createAccountStyles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => this.setState({email: email})}
            value={this.email}
          />
          <TextInput
            style={{
              ...styles.mt2,
              ...styles.input,
            }}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(password) => this.setState({password: password})}
            value={this.password}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {this.setState({isLoading: true})}}
            style={{
              ...styles.mt2,
              ...styles.button,
              ...styles.buttonWhite,
            }}
          >
           {signInButton()}
          </TouchableOpacity>
          <Text style={{ ...styles.mt3, ...styles.textLink }}>Forgot Password?</Text>
        </View>
      </View>
    );
  }
}
