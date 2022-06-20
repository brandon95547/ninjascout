import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Toast from 'react-native-root-toast'; 
import React from "react";
import { theme } from "../theme/variables"
import styles from "../theme/base";
import createAccountStyles from "../theme/account";
import axios from 'axios';
import Constants from 'expo-constants';

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      apiEndpoint: Constants.manifest.extra.apiEndpoint
    };
  }

  signUp = () => {
    this.setState({ isLoading: true })
    if (this.state.email && this.state.password) {
      axios.post(`${this.state.apiEndpoint}?request=createAccount`, {
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
        console.log(response.data)
        const email = response.data.email || ''
        const password = response.data.password || ''
        // Add a Toast on screen.
        let toast = Toast.show(`${email} and ${password}`, {
          duration: Toast.durations.LONG,
        });
        this.setState({ isLoading: false })
      })
        .catch(error => {
        Toast.show(error.message, {
          duration: Toast.durations.LONG,
          backgroundColor: theme.complimentary
        });
        this.setState({ isLoading: false })
      });
    } else {
      Toast.show('Email and password are required.', {
        duration: Toast.durations.LONG,
        backgroundColor: theme.complimentary
      });
      setTimeout(() => {
        this.setState({ isLoading: false })
      }, 3000)
    }
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
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email: email})}
            value={this.state.email}
          />
          <TextInput
            style={{
              ...styles.mt2,
              ...styles.input,
            }}
            autoCapitalize="none"
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(password) => this.setState({password: password})}
            value={this.state.password}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {this.signUp()}}
            style={{
              ...styles.mt2,
              ...styles.button,
              ...styles.buttonWhite,
            }}
            disabled={this.state.isLoading}
          >
           {signInButton()}
          </TouchableOpacity>
          <Text style={{ ...styles.mt3, ...styles.textLink }}>Forgot Password?</Text>
        </View>
      </View>
    );
  }
}
