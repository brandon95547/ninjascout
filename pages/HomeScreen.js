import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../theme/base";
import homeStyles from "../theme/home";
import header from "../theme/header";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <ScrollView contentContainerStyle={homeStyles.container}>
        <Image style={header.logo} source={require("../assets/ninja.png")} />
        <Text style={header.logoText}>Ninja Scout</Text>
        <View style={homeStyles.inputWrap}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Create Account')}>
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
      </ScrollView>
    );
  }
}
