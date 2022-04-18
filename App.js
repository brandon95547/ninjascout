// import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import * as Font from 'expo-font';
import styles from "./theme/base";
import homeStyles from "./theme/home";
import header from "./theme/header";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      password: '',
      fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Montserrat-SemiBold': {
        uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={homeStyles.container}>
          <Image style={header.logo} source={require("./assets/ninja.png")} />
          <Text style={header.logoText}>Ninja Scout</Text>
          <View style={styles.inputWrap}>
            <Ionicons style={styles.inputIcon} name="md-mail-outline" size={32} color="green" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => {this.setState({ text: text})}}
              value={this.state.text}
              placeholder="Email"
              placeholderTextColor="#CCC"
            />
          </View>
          <View style={{ ...styles.inputWrap, ...styles.mt1 }}>
            <Ionicons style={styles.inputIcon} name="md-mail-outline" size={32} color="green" />
            <TextInput
              style={styles.input}
              onChangeText={(password) => {this.setState({ password: password})}}
              value={this.state.password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#CCC"
            />
          </View>
          <Button
            title="Login"
            color="white"
          />
        </View>
      );
    } else {
      return null
    }
  }
}
