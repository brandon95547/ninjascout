import { StyleSheet } from "react-native";
import { theme } from "../theme/variables"

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 46,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "90%",
    color: "white"
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 46,
    width: "90%",
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    width: 32,
    height: 32,
  },
  textLink: {
    color: "white",
    textDecorationLine: "underline"
  },
  buttonWhite: {
    backgroundColor: "white",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  pageIcon: {
    marginTop: 60
  },
  // spacing classes
  mt1: {
    marginTop: 8,
  },
  mb1: {
    marginBottom: 8,
  },
  mt2: {
    marginTop: 16,
  },
  mb2: {
    marginBottom: 16,
  },
  mt3: {
    marginTop: 24,
  },
  mb3: {
    marginBottom: 24,
  },
  ml1: {
    marginLeft: 8
  },
  ml2: {
    marginLeft: 16
  },
  ml3: {
    marginLeft: 24
  },
  mr1: {
    marginRight: 8
  },
  mr2: {
    marginRight: 16
  },
  mr3: {
    marginRight: 24
  },
  /* PADDING */
  ph1: {
    paddingHorizontal: 8
  },
  ph2: {
    paddingHorizontal: 16
  },
  ph3: {
    paddingHorizontal: 24
  },
  pv1: {
    paddingVertical: 8
  },
  pv2: {
    paddingVertical: 16
  },
  pv3: {
    paddingVertical: 24
  },
  text1: {
    fontSize: 17
  },
  // color classes
  cWhite: {
    color: "white",
  },
  cDark: {
    color: "#111",
  },
  headingWrap: {
    display: "flex",
    alignItems: "center"
  },
  heading1: {
    fontSize: 26,
    marginTop: 20,
    fontWeight: "bold"
  },
  dataTableWrap: {
    backgroundColor: "white",
    width: "88%",
    borderRadius: 20
  },
  dataTable: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  dataTableRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 26
  },
  dataTableText: {
    fontSize: 20,
    marginLeft: 20
  },
  dataTableEnd: {
    marginLeft: "auto",
    marginRight: 20,
    fontSize: 22,
    fontWeight: "bold"
  },
  circleIconWrap: {
    borderRadius: 64 / 2,
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundTeal: {
    backgroundColor: theme.teal
  },
  backgroundPrimary: {
    backgroundColor: theme.primary
  },
  backgroundSecondary: {
    backgroundColor: theme.secondary
  },
  backgroundComplimentary: {
    backgroundColor: theme.complimentary
  },
  backgroundHot: {
    backgroundColor: theme.hot
  },
  backgroundViolet: {
    backgroundColor: theme.violet
  },
  backgroundSuccess: {
    backgroundColor: theme.success
  },
  backgroundGold: {
    backgroundColor: theme.gold
  },
  backgroundBlue: {
    backgroundColor: theme.blue
  },
  level: {
    fontSize: 18,
    color: theme.complimentary
  },
  /* TEXT SIZE */
  textBold: {
    fontWeight: "bold"
  },
  text1: {
    fontSize: 16
  },
  text2: {
    fontSize: 18
  },
  text3: {
    fontSize: 20
  },
  text4: {
    fontSize: 24
  },
  text5: {
    fontSize: 30
  },
  /* COLORS */
  colorChill: {
    color: theme.chill
  },
  colorBlue: {
    color: theme.blue
  },
  colorHot: {
    color: theme.hot
  },
  colorWhite: {
    color: '#FFF'
  },
});
