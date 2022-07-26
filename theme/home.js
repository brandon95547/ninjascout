import { StyleSheet } from "react-native";
import { theme } from "../theme/variables"

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.primary,
    alignItems: "center",
    justifyContent: "center",
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
