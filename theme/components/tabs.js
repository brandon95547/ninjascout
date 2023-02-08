import { StyleSheet } from "react-native";
import { theme } from "../variables";

export default StyleSheet.create({
  tabsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    borderBottomWidth: 1,
  },
  success: {
    backgroundColor: theme.successLight,
  },
  dark: {
    backgroundColor: theme.dark,
  },
  fire: {
    backgroundColor: theme.fire
  },
  normal: {
    backgroundColor: theme.blue
  },
  failure: {
    backgroundColor: theme.error
  },
  fireText: {
    color: theme.prominent
  },
  tab: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 26,
    justifyContent: "center"
  },
  tabValue: {
    color: theme.primary,
    fontSize: theme.text3,
    fontWeight: "bold"
  }
});
