import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../theme/base";
import homeStyles from "../theme/home";
import header from "../theme/header";

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <View style={homeStyles.container}>
        <Image style={header.logo} source={require("../assets/ninja.png")} />
        <Text style={header.logoText}>Ninja Scout</Text>
        <View style={homeStyles.inputWrap}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ ...styles.cWhite, ...styles.buttonText }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.mt2,
              ...styles.button,
              ...styles.buttonWhite,
            }}
          >
            <Text style={{ ...styles.cDark, ...styles.buttonText }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
