// import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import styles from "./theme/base";
import header from "./theme/header";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={header.logo} source={require("./assets/ninja.png")} />
        <Text style={header.logoText}>Ninja Scout!</Text>
        <View style={styles.inputWrap}>
          <Ionicons style={styles.inputIcon} name="md-mail-outline" size={32} color="green" />
          <TextInput
            style={styles.input}
            onChangeText={(text) => { this.setState({ text: text})}}
            value={this.state.text}
            placeholder="Email"
            placeholderTextColor="#CCC"
          />
        </View>
      </View>
    );
  }
}
