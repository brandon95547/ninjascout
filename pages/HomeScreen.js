import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import baseStyles from "../theme/base";
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
      <ScrollView contentContainerStyle={{...homeStyles.container, ...baseStyles.backgroundPrimary}}>
        <Image style={header.logo} source={require("../assets/ninja.png")} />
        <Text style={header.logoText}>Ninja Scout</Text>
        <View style={homeStyles.inputWrap}>
          <TouchableOpacity style={baseStyles.button} onPress={() => this.props.navigation.navigate('Create Account')}>
            <Text style={{ ...baseStyles.cWhite, ...baseStyles.buttonText }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...baseStyles.mt2,
              ...baseStyles.button,
              ...baseStyles.buttonWhite,
            }}
          >
            <Text style={{ ...baseStyles.cDark, ...baseStyles.buttonText }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
