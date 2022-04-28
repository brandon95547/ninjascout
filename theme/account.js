import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logo: {
    width: windowWidth / 3,
    height: windowWidth / 4,
    marginTop: 60,
    marginLeft: -40,
  },
  logoText: {
    color: "white",
    marginTop: 5,
    fontSize: 30,
    marginBottom: 30,
    fontFamily: "Montserrat",
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
