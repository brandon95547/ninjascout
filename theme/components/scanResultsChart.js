import { StyleSheet } from "react-native";
import { theme } from "../../theme/variables"
import base from "../base";

export default StyleSheet.create({
  scanResultsChartWrap: {
    height: '20%'
  },
  directions: {
    alignItems: 'center'
  },
  directionsText: {
    fontSize: 20,
    color: base.primary
  },
  scanResultsChartInner: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20
  },
  scanResultsChartRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  scanResultsChartLabel: {
    fontSize: 18,
    flex: 2
  },
  scanResultsChartPrice: {
    fontSize: 17,
    textAlign: 'center',
    flex: .35,
    fontWeight: 'bold',
    color: theme.success
  },
  scanResultsChartData: {
/*     backgroundColor: theme.success,
    width: "84%",
    paddingVertical: 10,
    color: "white",
    paddingLeft: 16 */
  }
});
