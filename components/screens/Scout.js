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
import { Input, Icon } from "react-native-elements";
import MenuDrawer from "react-native-side-drawer";
import Header from "../Header";
import * as Speech from "expo-speech";
import { componentStyles, colors } from "../../src/GlobalStyles";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

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

  speak = () => {
    const thingToSay = "that would be nice.";
    Speech.speak(thingToSay);
  };

  async encodeAudioFile(fileUriBase64) {
    try {
      const content = await FileSystem.readAsStringAsync(fileUriBase64);
      return base64.fromByteArray(stringToUint8Array(content));
    } catch (e) {
      console.warn("fileToBase64()", e.message);
      return "";
    }
  }

  setModalVisible(value) {
    this.setState({ modalVisible: value });
  }

  async componentDidMount() {
    await Font.loadAsync({
      "poppins-normal": require("../../assets/fonts/Poppins_400_normal.ttf"),
    });
    this.setState({ assetsLoaded: true });
    this.speak();
    // An audio resource
    const resource = require("../../assets/audio/449481__12125065__hello.mp3");
    // const resource = require('./assets/icon.png');
    const asset = Asset.fromModule(resource);
    await asset.downloadAsync();

    // Base64 encoding for reading & writing
    // console.log("filesystem", FileSystem.EncodingType);
    const options = { encoding: FileSystem.EncodingType.Base64 };
    // Read the audio resource from it's local Uri
    const data = await FileSystem.readAsStringAsync(asset.localUri, options);

    // Print the base64 data
    // console.log(data);

    var data2 = {
      base64: data,
    };

    fetch("http://www.raptorwebsolutions.com/api/api.php", {
      method: "POST",
      body: JSON.stringify(data2),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-APITOKEN": Math.round(((new Date().getUTCHours() * 3) / 2) * 10101),
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
      })
      .catch((err) => console.log(err));
  }

  async saveToPhoneLibrary() {
    //call the function that creates a new (if not already existing) album
    this.createAudioAsset()
      //then save the created asset to the phone's media library
      .then((asset) => MediaLibrary.saveToLibraryAsync(asset))
      .catch((err) => console.log("media library save asset err", err));
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
    const searchInput = React.createRef();

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
              <View style={scout.searchWrap}>
                <Input
                  ref={searchInput}
                  autoCapitalize="none"
                  placeholder="Type a keyword..."
                  containerStyle={scout.input}
                  rightIconContainerStyle={scout.inputIcon}
                  inputStyle={scout.inputStyle}
                  onChangeText={(keyword) =>
                    this.setState({ keyword: keyword })
                  }
                />
                <Icon
                  raised
                  name="microphone"
                  type="font-awesome"
                  color="#777"
                  onPress={() => console.log("hello")}
                />
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
