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
      name: null,
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
    await Font.loadAsync({
      "poppins-normal": require("../../assets/fonts/Poppins_400_normal.ttf"),
    });
    this.setState({ assetsLoaded: true });
  }

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
    const { setAsyncStorage, getAsyncStorage } = this.context;

    var error = false;
    var data = {
      name: this.state.name,
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
      fetch(
        "http://www.raptorwebsolutions.com/api/api.php?request=createAccount",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-APITOKEN": Math.round(
              ((new Date().getUTCHours() * 3) / 2) * 10101
            ),
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            this.showAlert("Success!", "Your account has been created.");
            setAsyncStorage("user", {
              name: this.state.name,
              email: this.state.email,
            });
            this.props.navigation.navigate("Home");
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
          drawerContent={this.props.route.params.drawerContent(
            this.props.navigation
          )}
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
                autoCapitalize="none"
                placeholder="Name"
                leftIcon={{
                  type: "font-awesome",
                  name: "user",
                  color: "#CCC",
                  size: 20,
                }}
                containerStyle={login.signupInput}
                leftIconContainerStyle={login.signupInputIcon}
                inputStyle={login.signupInputStyle}
                onChangeText={(name) => this.setState({ name: name })}
              />
              <Input
                autoCapitalize="none"
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
                autoCapitalize="none"
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
                autoCapitalize="none"
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
