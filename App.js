// import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import * as Font from "expo-font";
import styles from "./theme/base";
import homeStyles from "./theme/home";
import header from "./theme/header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      password: "",
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Montserrat-SemiBold": {
        uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
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
          <View style={homeStyles.inputWrap}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ ...styles.cWhite, ...styles.buttonText }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.mt2, ...styles.button, ...styles.buttonWhite }}
            >
              <Text style={{ ...styles.cDark, ...styles.buttonText }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}
