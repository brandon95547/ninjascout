"use strict";
import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../GlobalStyles";

const dimensions = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    height: "100%",
  },
  lightInput: {
    backgroundColor: colors.gray,
    width: dimensions.width * 0.75,
    alignSelf: "center",
    marginTop: 16,
    borderRadius: (dimensions.width * 0.75) / 2,
    height: 48,
    textAlign: "center",
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    width: dimensions.width * 0.75,
    alignSelf: "center",
    marginTop: 16,
    borderRadius: (dimensions.width * 0.75) / 2,
    height: 48,
    textAlign: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    color: "white",
  },
  linkText: {
    color: colors.secondary,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingBottom: 40,
  },
});
