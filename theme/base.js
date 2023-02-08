import { StyleSheet } from "react-native";
import { theme } from "../theme/variables"

export default StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    width: "100%"
  },
  flexH: {
    display: 'flex',
    flexDirection: 'row'
  },
  grow: {
    flexGrow: 1
  },
  keyboard: {
    width: "100%",
    display: "flex",
    height: "100%",
  },
  keyboardInner: {
    width: "100%"
  },
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
  mt4: {
    marginTop: 32
  },
  mb4: {
    marginBottom: 32
  },
  ml_3: {
    marginLeft: 3
  },
  ml1a: {
    marginLeft: 4
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
  mr_3: {
    marginRight: 3
  },
  mr1a: {
    marginRight: 4
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
  circleIconWrap: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 56 / 2,
    width: 56,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundDark: {
    backgroundColor: "#333"
  },
  backgroundWhite: {
    backgroundColor: "#FFF"
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
  text6: {
    fontSize: 36
  },
  text7: {
    fontSize: 42
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
  colorTeal: {
    color: theme.teal
  },
  colorSuccess: {
    color: theme.success
  },
  colorSuccessLight: {
    color: theme.successLight
  },
  colorLight: {
    color: theme.light
  },
  colorLight2: {
    color: theme.light2
  },
  colorGold: {
    color: theme.gold
  },
  colorDark: {
    color: theme.dark
  },
  colorBlack: {
    color: theme.black
  },
  colorComplimentary: {
    color: theme.complimentary
  },
  colorYellow: {
    color: theme.yellow
  }
});
