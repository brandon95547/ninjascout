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
  state = { nick: '', email: '', password: '', isLoading: false, apiEndpoint: Constants.manifest.extra.apiEndpoint, apiKey: Constants.manifest.extra.apiKey, utilities: null }

  // using arrow functions keeps scope for this, lifecycle methods have scope to this by default
  async componentDidMount() {
    this.utilities = new Utilities
    // this.props.navigation.navigate('Dashboard')
    // console.log(await AsyncStorage.getItem('user'))
  }

  signUp = () => {
    this.setState({ isLoading: true })
    if (this.utilities.validateEmail(this.state.email) && this.state.password) {
      axios.post(`${this.state.apiEndpoint}/createAccount`, {
        email: this.state.email,
        password: this.state.password,
        nick: this.state.nick
      })
        .then(response => {
          console.log(response.data)
          if (!response.data.success) {
            Toast.show(response.data.message, {
              duration: Toast.durations.LONG,
              backgroundColor: theme.complimentary
            })
          } else {
            Toast.show(response.data.message, {
              duration: Toast.durations.LONG,
              backgroundColor: theme.success,
              onHide: () => {
                AsyncStorage.setItem('user', JSON.stringify({
                  nick: this.state.nick,
                  email: this.state.email,
                  password: this.state.password
                }))
                this.props.navigation.navigate('Dashboard')
              },
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
      Toast.show('A valid nickname, email and password are required.', {
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
          <Text style={{ ...styles.cDark, ...styles.buttonText }}>SIGN UP</Text>
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
            placeholder="Nickname"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={(nick) => this.setState({nick: nick})}
            value={this.state.nick}
          />
          <TextInput
            style={[styles.input, styles.mt2]}
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
            onSubmitEditing={this.signUp}
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
          <Text onPress={() => this.props.navigation.navigate('Login')}style={{ ...styles.mt3, ...styles.textLink }}>Already have an account, Login</Text>
        </View>
      </ScrollView>
    );
  }
}
