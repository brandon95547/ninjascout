import React, { Component, useContext } from "react";
import * as Font from "expo-font";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Input, Button } from "react-native-elements";
import MenuDrawer from "react-native-side-drawer";
import Header from "../Header";
import SideBar from "../SideBar";
import { componentStyles, colors } from "../../src/GlobalStyles";

// this is our clobal context module to store global session state across screens
import UserContext from "../../UserContext";

const global = require("../../src/styles/global");
const scout = require("../../src/styles/scout");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalVisible: false,
      assetsLoaded: false,
      selectedPrinter: null,
      notification: {},
      token: "",
      keyword: "",
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
    return (
      <Header navigation={this.props.navigation} toggleOpen={this.toggleOpen} />
    );
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

          <ScrollView contentContainerStyle={scout.containerWrap}>
            <View style={global.heading}>
              <Text style={global.headingText}>Scout</Text>
            </View>
            <View style={scout.container}>
              <Text style={global.commonText}>
                Search for an item by typing, using audio or a barcode scanner.
              </Text>
              <Input
                autoCapitalize="none"
                placeholder="Type a keyword..."
                rightIcon={{
                  type: "font-awesome",
                  name: "microphone",
                  color: "#777",
                  size: 20,
                }}
                containerStyle={scout.input}
                rightIconContainerStyle={scout.inputIcon}
                inputStyle={scout.inputStyle}
                onChangeText={(keyword) => this.setState({ keyword: keyword })}
              />
            </View>
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
