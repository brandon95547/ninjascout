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
import { Icon, Button } from "native-base";
import MenuDrawer from "react-native-side-drawer";
import Header from "../Header";
import SideBar from "../SideBar";
import { componentStyles, colors } from "../../src/GlobalStyles";

// this is our clobal context module to store global session state across screens
import UserContext from "../../UserContext";

const global = require("../../src/styles/global");
const home = require("../../src/styles/home");

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

          <ScrollView contentContainerStyle={home.containerWrap}>
            <View style={global.heading}>
              <Text style={global.headingText}>Dashboard</Text>
            </View>
            <View style={home.container}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Scout");
                  }}
                  style={home.itemBlock}
                >
                  <Icon
                    style={home.itemBlockIcon}
                    type="MaterialCommunityIcons"
                    name="cloud-search-outline"
                  />
                  <Text style={home.itemBlockText}>Scout</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={home.itemBlock}>
                  <Icon
                    style={home.itemBlockIcon}
                    type="MaterialCommunityIcons"
                    name="trending-up"
                  />
                  <Text style={home.itemBlockText}>Trending</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={home.itemBlock}>
                  <Icon
                    style={home.itemBlockIcon}
                    type="MaterialCommunityIcons"
                    name="cog"
                  />
                  <Text style={home.itemBlockText}>Settings</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={home.itemBlock}>
                  <Icon
                    style={home.itemBlockIcon}
                    type="MaterialCommunityIcons"
                    name="chart-bar"
                  />
                  <Text style={home.itemBlockText}>Reports</Text>
                </TouchableOpacity>
              </View>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey",
    padding: 30,
  },
  modalInner: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 16,
  },
  modalButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 12,
  },
  joinButtons: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 20,
  },
  joinButtonsText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    fontFamily: "poppins-normal",
  },
  primaryButton: {
    backgroundColor: colors.primary,
    width: "75%",
    alignSelf: "center",
    marginTop: 50,
  },
});
