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

// we need to import all images for react native
import ninja from "../../assets/img/ninja.png";
import dollaz from "../../assets/img/dollaz.jpeg";

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
          drawerContent={this.drawerContent()}
          drawerPercentage={65}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          {this.showHeader()}

          <ScrollView style={home.container}>
            <Image style={home.logo} source={ninja} />
            <Text style={home.logoText}>NINJA SCOUT</Text>

            <Button
              onPress={() => this.props.navigation.navigate(continueButton)}
              style={styles.primaryButton}
              block
            >
              <Text style={styles.joinButtonsText}>START PICKUP ORDER</Text>
            </Button>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: 40,
              }}
            >
              <Button
                onPress={() => this.props.navigation.navigate("NewAccount")}
                style={styles.joinButtons}
                transparent
              >
                <Text style={styles.joinButtonsText}>Join</Text>
              </Button>
              <Button
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.joinButtons}
                transparent
              >
                <Text style={styles.joinButtonsText}>Login</Text>
              </Button>
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
