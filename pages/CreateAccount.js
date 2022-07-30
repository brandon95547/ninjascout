import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Toast from 'react-native-root-toast'; 
import React from "react";
import { theme } from "../theme/variables"
import styles from "../theme/base";
import createAccountStyles from "../theme/account";
import axios from 'axios';
import Constants from 'expo-constants';
import { Utilities } from "../utilities";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CreateAccount extends React.Component {
  state = { email: '', password: '', isLoading: false, apiEndpoint: Constants.manifest.extra.apiEndpoint, apiKey: Constants.manifest.extra.apiKey, utilities: null }

  // using arrow functions keeps scope for this, lifecycle methods have scope to this by default
  componentDidMount() {
    this.utilities = new Utilities
    this.props.navigation.navigate('Dashboard')
  }

  signUp = () => {
    this.setState({ isLoading: true })
    if (this.utilities.validateEmail(this.state.email) && this.state.password) {
      axios.post(`${this.state.apiEndpoint}?request=createAccount`, {
        email: this.state.email,
        password: this.state.password,
        apiKey: this.state.apiKey
      })
        .then(response => {
        // console.log(response.data)
        const error = response.data.error || ''
        const insertId = parseInt(response.data.insertId) || 0
        // Add a Toast on screen.
        if (insertId) {
          Toast.show('Account successfully created.', {
            duration: Toast.durations.LONG,
            backgroundColor: theme.success
          })
          AsyncStorage.setItem('user', response.data);
        } else {
          Toast.show(error, {
            duration: Toast.durations.LONG,
            backgroundColor: theme.complimentary
          })
        }
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
      Toast.show('A valid email and password are required.', {
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
      <ScrollView contentContainerStyle={createAccountStyles.container}>
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
      </ScrollView>
    );
  }
}
