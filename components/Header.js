import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Left, Right, Icon, Drawer, Container } from "native-base";
import { componentStyles, headerStyles } from "../src/GlobalStyles";
import UserContext from "../UserContext";
import * as Notifications from "expo-notifications";
import { Audio } from "expo-av";

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      notification: {},
    };
  }

  async playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/209382.mp3")
    );
    await sound.setVolumeAsync(0.5);
    await sound.playAsync();
  }

  async componentDidMount() {
    Notifications.addNotificationReceivedListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.playSound();
    this.setState({
      notification: notification.request.trigger.remoteMessage.data.message,
    });
    // console.log('_handleNotification', notification);
    this.setModalVisible(true);
  };

  setModalVisible(value) {
    this.setState({ modalVisible: value });
  }

  static contextType = UserContext;

  render() {
    const { user } = this.context;

    let continueButton = user ? "Cart" : "Login";

    let leftButton = (
      <View style={headerStyles.viewRow}>
        <TouchableOpacity style={headerStyles.logo}>
          <Icon
            style={{ color: "white" }}
            type="MaterialCommunityIcons"
            name="movie-roll"
          />
        </TouchableOpacity>

        <Text style={headerStyles.logoText}>Midway Drive In</Text>
      </View>
    );
    if (this.props.leftButton == "interior") {
      leftButton = (
        <View style={headerStyles.viewRow}>
          <TouchableOpacity
            style={headerStyles.logo}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon
              style={{ color: "white" }}
              type="MaterialIcons"
              name="arrow-back"
            />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <>
        <View style={{ backgroundColor: "#505780", paddingTop: 36 }}>
          <View
            style={
              Platform.OS == "ios"
                ? headerStyles.viewContainer
                : headerStyles.viewAndroid
            }
          >
            {leftButton}

            <View style={headerStyles.viewHamburger}>
              <TouchableOpacity
                style={headerStyles.hamburger}
                onPress={() => {
                  this.props.navigation.navigate(continueButton);
                }}
              >
                <Icon
                  style={{ color: "white" }}
                  type="MaterialCommunityIcons"
                  name="cart"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={headerStyles.hamburger}
                onPress={this.props.toggleOpen}
              >
                <Icon
                  style={{ color: "white" }}
                  type="MaterialCommunityIcons"
                  name="menu"
                />
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Notification has been closed.");
            }}
          >
            <View style={styles.modalContainer}>
              <ScrollView contentContainerStyle={styles.modalInner}>
                <Text>{this.state.notification}</Text>
              </ScrollView>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.modalButton}>CLOSE NOTIFICATION</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
});
