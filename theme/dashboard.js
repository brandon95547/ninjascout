import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../theme/variables"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center"
  },
  scanButton: {
    marginTop: "auto",
    marginBottom: 30,
    width: "60%",
    backgroundColor: theme.primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 28,
  },
  scanButtonText: {
    color: "white",
    fontWeight: "bold"
  }
});
