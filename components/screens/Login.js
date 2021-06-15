import React, { Component, useContext } from "react";
import * as Font from "expo-font";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { Icon, Button } from "native-base";
import MenuDrawer from "react-native-side-drawer";
import Header from "../Header";
import SideBar from "../SideBar";
import { componentStyles, colors } from "../../src/GlobalStyles";

// this is our clobal context module to store global session state across screens
import UserContext from "../../UserContext";

// we need to import all images for react native
import ninja from "../../assets/img/ninja.png";
import ocean from "../../assets/img/dollaz.jpeg";

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
      "julee-normal": require("../../assets/fonts/Julee-Regular.ttf"),
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

  render() {
    const { assetsLoaded } = this.state;
    const { user } = this.context;

    let continueButton = user ? "StartPickup" : "Login";

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
              <View style={login.logoWrap}>
                <Image style={login.logo} source={ninja} />
                <Text style={login.logoText}>NINJA SCOUT</Text>
              </View>

              <View style={login.actions}>
                <TextInput
                  style={global.lightInput}
                  underlineColorAndroid="transparent"
                  placeholder="Enter Email"
                  placeholderTextColor="#BBB"
                  autoCapitalize="none"
                />
                <TextInput
                  style={global.lightInput}
                  underlineColorAndroid="transparent"
                  placeholder="Password"
                  placeholderTextColor="#BBB"
                  autoCapitalize="none"
                />
                <Button block style={global.primaryButton}>
                  <Text style={global.primaryButtonText}>Login</Text>
                </Button>
                <Text style={login.signupText}>
                  Don't have an account?{" "}
                  <Text
                    onPress={() => {
                      this.props.navigation.navigate("SignUp");
                    }}
                    style={global.linkText}
                  >
                    Sign Up!
                  </Text>
                </Text>
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
