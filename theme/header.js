import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logo: {
    width: windowWidth / 2,
    height: windowWidth / 2.75,
    marginTop: 100,
    marginLeft: -44,
  },
  logoText: {
    color: "white",
    marginTop: 10,
    fontSize: 30,
  },
});
