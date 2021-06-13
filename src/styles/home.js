"use strict";
import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../GlobalStyles";

const dimensions = Dimensions.get("window");
const width = dimensions.width / 2.5;
// ratio of logo 428 x 526
const imageHeight = (327 / 451) * width;

// console.log(imageWidth);

module.exports = StyleSheet.create({
  containerWrap: {
    backgroundColor: "white",
    height: "100%",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
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
  itemBlock: {
    width: dimensions.width / 2 - 30,
    height: dimensions.width / 2 - 30,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  itemBlockText: {
    fontSize: 24,
    color: colors.blue,
  },
  itemBlockIcon: {
    color: colors.blue,
    fontSize: 48,
  },
});
