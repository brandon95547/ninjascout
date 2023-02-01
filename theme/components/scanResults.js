import { StyleSheet } from "react-native";
import { theme } from "../../theme/variables"

export default StyleSheet.create({
  scanResultsWrap: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: theme.primary,
    paddingTop: 16,
    paddingBottom: 34,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  averageSalePriceWrap: {
    display: "flex"
  },
  scanResultsText: {
    color: "white",
    fontSize: theme.text2
  },
  scanResultWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  scanResultPass: {
    color: theme.success,
    fontSize: theme.text5
  }
});
