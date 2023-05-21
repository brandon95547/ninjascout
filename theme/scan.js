import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logo: {
    width: windowWidth / 2,
    height: windowWidth / 7,
    marginTop: 20
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center'
  }
})
