import React, { Component, useContext } from "react";
import * as Font from "expo-font";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
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
import { Audio } from "expo-av";

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
      recording: null,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  static contextType = UserContext;

  speak = () => {
    const thingToSay = "that would be nice.";
    Speech.speak(thingToSay);
  };

  setModalVisible(value) {
    this.setState({ modalVisible: value });
  }

  async startRecording() {
    try {
      // console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      // console.log("Starting recording..");
      const recording = new Audio.Recording();

      const RECORDING_OPTIONS_PRESET_LOW_QUALITY = {
        android: {
          extension: ".wav",
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: ".wav",
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM,
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
          sampleRate: 22000,
          numberOfChannels: 1,
          // bitRate: 128000,
          // linearPCMBitDepth: 16,
          // linearPCMIsBigEndian: false,
          // linearPCMIsFloat: false,
        },
      };

      await recording.prepareToRecordAsync(
        RECORDING_OPTIONS_PRESET_LOW_QUALITY
      );
      await recording.startAsync();
      this.setState({ recording: recording });
      // play recording started sound
      // console.log("Recording started");
      setTimeout(() => {
        this.stopRecording();
      }, 3000);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async stopRecording() {
    console.log("Stopping recording..");
    // console.log(this.recording);
    // this.setState({ recording: undefined });
    await this.state.recording.stopAndUnloadAsync();
    const uri = this.state.recording.getURI();
    // console.log("Recording stopped and stored at", uri);
    // console.log(FileSystem);
    await FileSystem.moveAsync({
      from: uri,
      to: FileSystem.documentDirectory + "speech.wav",
    });
    this.voiceToText();
    // console.log(FileSystem.documentDirectory);
  }

  async voiceToText() {
    // An audio resource
    // const resource = require("../../assets/audio/recording-36806D7F-6532-4466-9202-A48CC980CDDE.aac");
    // const asset = Asset.fromModule(resource);
    // await asset.downloadAsync();

    // Base64 encoding for reading & writing
    // console.log("filesystem", FileSystem.EncodingType);
    const options = { encoding: FileSystem.EncodingType.Base64 };
    // Read the audio resource from it's local Uri
    // const data = await FileSystem.readAsStringAsync(asset.localUri, options);
    const data = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + "speech.wav",
      options
    );

    // Print the base64 data
    // console.log(data);

    var data2 = {
      base64: data,
    };

    // console.log(data2);

    fetch(
      "http://www.raptorwebsolutions.com/api/api.php?request=translateVoice",
      {
        method: "POST",
        body: JSON.stringify(data2),
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
        console.log("json", json);
      })
      .catch((err) => console.log(err));
  }

  async componentDidMount() {
    await Font.loadAsync({
      "poppins-normal": require("../../assets/fonts/Poppins_400_normal.ttf"),
    });
    this.setState({ assetsLoaded: true });
    this.playSound();
  }

  async playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/speech.mp3")
    );
    await sound.setVolumeAsync(0.5);
    await sound.playAsync();
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
                  onPress={() => this.startRecording()}
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
