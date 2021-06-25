"use strict";
import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../GlobalStyles";

const dimensions = Dimensions.get("window");

module.exports = StyleSheet.create({
  containerWrap: {
    backgroundColor: "white",
    height: "100%",
  },
  container: {
    padding: 20,
  },
  searchWrap: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: dimensions.width * 0.75,
    alignSelf: "center",
    color: "white",
    fontSize: 16,
  },
  inputIcon: {
    marginRight: 12,
    width: 20,
  },
  inputStyle: {
    color: "#EEE",
  },
});
