import { StyleSheet } from "react-native";
import { theme } from "../../theme/variables"

export default StyleSheet.create({
  scanResultsChartWrap: {
    display: "flex",
  },
  scanResultsChartInner: {
    width: "100%"
  },
  scanResultsChartRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center"
  },
  scanResultsChartLabel: {
    width: 50,
    textAlign: "right",
    marginRight: 10
  },
  scanResultsChartData: {
    backgroundColor: theme.success,
    width: "78%",
    paddingVertical: 10,
    color: "white",
    paddingLeft: 16
  }
});
