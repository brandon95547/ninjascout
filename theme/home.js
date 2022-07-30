import { StyleSheet } from "react-native";
import { theme } from "../theme/variables"

export default StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%"
  },
  inputWrap: {
    width: "85%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
  },
});
