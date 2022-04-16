import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logo: {
    flex: 1,
    aspectRatio: 0.25,
    resizeMode: "contain",
  },
});
