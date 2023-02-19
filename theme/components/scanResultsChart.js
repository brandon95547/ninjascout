import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../theme/variables"
import base from "../base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  scanResultsChartWrap: {
    height: '20%',
    backgroundColor: 'white',
  },
  directions: {
    alignItems: 'center'
  },
  image: {
    width: windowWidth/1.2,
    height: 250
  },
  directionsText: {
    fontSize: 20,
    color: base.primary
  },
  scanResultsChartInner: {
    paddingBottom: 20,
    borderColor: '#BBB',
    borderWidth: 1,
    marginHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F4F4F4'
  },
  scanResultsChartRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#E9E9E9'
  },
  scanResultsChartLabel: {
    fontSize: 20,
    flex: 1,
    paddingRight: 12
  },
  scanResultsChartPrice: {
    fontSize: 20,
    textAlign: 'center',
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
