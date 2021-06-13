import React, { Component, useContext } from "react";
import * as Font from "expo-font";
import { Input, Button } from "react-native-elements";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import MenuDrawer from "react-native-side-drawer";
import Header from "../Header";
import SideBar from "../SideBar";
import { componentStyles, colors } from "../../src/GlobalStyles";

import ocean from "../../assets/img/dollaz.jpeg";

// this is our global context module to store global session state across screens
import UserContext from "../../UserContext";

const global = require("../../src/styles/global");
const login = require("../../src/styles/login");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalVisible: false,
      assetsLoaded: false,
      notification: {},
      token: "",
      email: null,
      password: null,
      verify: null,
      submitted: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  static contextType = UserContext;

  setModalVisible(value) {
    this.setState({ modalVisible: value });
  }

  async componentDidMount() {
    const { setAsyncStorage, getAsyncStorage } = this.context;

    await Font.loadAsync({
      "poppins-normal": require("../../assets/fonts/Poppins_400_normal.ttf"),
    });
    this.setState({ assetsLoaded: true });
  }

  drawerContent = () => {
    return (
      <TouchableOpacity style={componentStyles.animatedBox}>
        <SideBar
          navigation={this.props.navigation}
          toggleOpen={this.toggleOpen}
        />
      </TouchableOpacity>
    );
  };

  showHeader = () => {
    if (1 === 3) {
      return (
        <Header
          navigation={this.props.navigation}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  showAlert(title, message) {
    Alert.alert(title, message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }

  createAccount() {
    var error = false;
    var data = {
      email: this.state.email,
      password: this.state.password,
      verify: this.state.verify,
    };

    this.setState({ submitted: true });

    if (data.password !== data.verify) {
      error = true;
      this.setState({ submitted: false });
      this.showAlert("Warning", "Passwords do not match.");
    }

    if (!error) {
      fetch("http://www.raptorwebsolutions.com/api/api.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
          } else {
            this.showAlert("Warning", json.message);
            this.setState({ submitted: false });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={65}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          {this.showHeader()}

          <ScrollView contentContainerStyle={login.container}>
            <ImageBackground source={ocean} style={global.image}>
              <Text style={login.signupTitle}>Sign Up</Text>
              <Input
                autoCapitalize={false}
                placeholder="Email"
                leftIcon={{
                  type: "font-awesome",
                  name: "envelope",
                  color: "#CCC",
                  size: 20,
                }}
                containerStyle={login.signupInput}
                leftIconContainerStyle={login.signupInputIcon}
                inputStyle={login.signupInputStyle}
                onChangeText={(email) => this.setState({ email: email })}
              />
              <Input
                autoCapitalize={false}
                secureTextEntry={true}
                placeholder="Password"
                leftIcon={{
                  type: "font-awesome",
                  name: "lock",
                  color: "#CCC",
                  size: 20,
                }}
                containerStyle={login.signupInput}
                leftIconContainerStyle={login.signupInputIcon}
                inputStyle={login.signupInputStyle}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
              />
              <Input
                autoCapitalize={false}
                secureTextEntry={true}
                placeholder="Confirm"
                leftIcon={{
                  type: "font-awesome",
                  name: "lock",
                  color: "#CCC",
                  size: 20,
                }}
                containerStyle={login.signupInput}
                leftIconContainerStyle={login.signupInputIcon}
                inputStyle={login.signupInputStyle}
                onChangeText={(verify) => this.setState({ verify: verify })}
              />

              <View style={login.loginButtonWrap}>
                <Button
                  buttonStyle={global.primaryButton}
                  onPress={() => this.createAccount()}
                  title="Sign Up"
                  loading={this.state.submitted}
                />
              </View>
            </ImageBackground>
          </ScrollView>
        </MenuDrawer>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}
