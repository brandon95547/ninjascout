import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logo: {
    width: windowWidth / 3,
    height: windowWidth / 4,
    marginTop: -100,
    marginLeft: -44,
  },
  logoText: {
    color: "white",
    marginTop: 5,
    fontSize: 30,
    marginBottom: 30,
    fontFamily: "Montserrat",
  },
});
