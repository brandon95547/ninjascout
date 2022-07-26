import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logoText: {
    color: "white",
    marginTop: 5,
    fontSize: 30,
    marginBottom: 30,
    fontFamily: "Roboto",
  },
  container: {
    display: "flex",
    backgroundColor: "#136262",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  inputWrap: {
    width: "85%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
  },
});
