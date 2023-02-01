import { StyleSheet } from "react-native";
import { theme } from "../variables";

export default StyleSheet.create({
  tabsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: theme.light,
    borderRadius: 18
  },
  tab: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 26,
  },
  tabText: {
    color: theme.primary,
    fontSize: theme.text2,
  },
  tabValue: {
    color: theme.primary,
    fontSize: theme.text3,
    fontWeight: "bold"
  }
});
