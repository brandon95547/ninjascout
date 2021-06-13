"use strict";
import { StyleSheet, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");
const width = dimensions.width / 2.5;
// ratio of logo 428 x 526
const imageHeight = (327 / 451) * width;

// console.log(imageWidth);

module.exports = StyleSheet.create({
  container: {
    backgroundColor: "#282850",
    height: "100%",
    fontFamily: "poppins-normal",
  },
  logo: {
    marginTop: 65,
    marginLeft: "auto",
    marginRight: "auto",
    width: width,
    height: imageHeight,
    position: "relative",
    left: -18,
  },
  logoText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontSize: 48,
    marginTop: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    fontFamily: "julee-normal",
  },
  actions: {
    marginTop: "auto",
    marginBottom: 120,
  },
  signupText: {
    textAlign: "center",
    color: "#DDD",
    marginTop: 20,
    fontSize: 16,
  },
  logoWrap: {
    marginTop: 60,
  },
  signupTitle: {
    fontSize: 48,
    textAlign: "center",
    color: "white",
    marginBottom: 60,
    marginTop: 120,
  },
  signupInput: {
    width: dimensions.width * 0.75,
    alignSelf: "center",
    color: "white",
    fontSize: 16,
  },
  signupInputIcon: {
    marginRight: 12,
    width: 20,
  },
  signupInputStyle: {
    color: "#EEE",
  },
  loginButtonWrap: {
    marginTop: 30,
    fontSize: 16,
  },
});
