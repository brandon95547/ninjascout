"use strict";
import { StyleSheet, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");
const width = dimensions.width / 2.5;
// ratio of logo 428 x 526
const imageHeight = (327 / 451) * width;

// console.log(imageWidth);

module.exports = StyleSheet.create({
  container: {
    backgroundColor: "#2e2e5f",
    height: "100%",
  },
  containerBackground: {
    resizeMode: "cover",
    height: dimensions.height,
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
    fontSize: 36,
    marginTop: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  actions: {
    marginTop: "auto",
  },
  logoWrap: {},
});
