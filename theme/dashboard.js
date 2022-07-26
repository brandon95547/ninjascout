import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../theme/variables"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  logoText: {
    color: "white",
    fontSize: 26,
    fontWeight: "normal",
    fontFamily: "Roboto",
    letterSpacing: 1
  },
  logoWrap: {
    backgroundColor: "#333",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 6
  },
  logoTextSpan: {
    color: theme.success
  },
  container: {
    display: "flex",
    backgroundColor: "#FFF",
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
