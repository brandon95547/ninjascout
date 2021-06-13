import { StyleSheet } from "react-native";

const colors = {
  primary: "#02805a",
  secondary: "#7fa5ff",
  dark: "#283f63",
  gray: "#3e4959",
  money: "green",
  failure: "orange",
  other: "purple",
  bgWhite: {
    backgroundColor: "white",
  },
};

const spacingStyles = {
  // margins
  mtSm: {
    marginTop: 6,
  },
  mt1: {
    marginTop: 12,
  },
  mt2: {
    marginTop: 24,
  },
  mt3: {
    marginTop: 32,
  },
  mt5: {
    marginTop: 40,
  },
  mt6: {
    marginTop: 48,
  },
  mt7: {
    marginTop: 60,
  },
  mbSm: {
    marginBottom: 6,
  },
  mb1: {
    marginBottom: 12,
  },
  mb2: {
    marginBottom: 24,
  },
  mb3: {
    marginBottom: 32,
  },
  mb5: {
    marginBottom: 40,
  },
  mb6: {
    marginBottom: 48,
  },
  mb7: {
    marginBottom: 60,
  },
  // paddings
  ptSm: {
    paddingTop: 6,
  },
  pt1: {
    paddingTop: 12,
  },
  pt2: {
    paddingTop: 24,
  },
  pt3: {
    paddingTop: 32,
  },
  pt5: {
    paddingTop: 40,
  },
  pt6: {
    paddingTop: 48,
  },
  pt7: {
    paddingTop: 60,
  },
  pbSm: {
    paddingBottom: 6,
  },
  pb1: {
    paddingBottom: 12,
  },
  pb2: {
    paddingBottom: 24,
  },
  pb3: {
    paddingBottom: 32,
  },
  pb5: {
    paddingBottom: 40,
  },
  pb6: {
    paddingBottom: 48,
  },
  pb7: {
    paddingBottom: 60,
  },
};

const headerStyles = {
  buttonText: {
    fontWeight: "bold",
    color: colors.primary,
  },
  viewContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    backgroundColor: colors.primary,
  },
  viewAndroid: {
    flexDirection: "row",
    paddingBottom: 10,
    marginTop: 20,
    backgroundColor: colors.primary,
  },
  viewRow: {
    flexDirection: "row",
  },
  viewHamburger: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  logo: {
    paddingTop: 12,
    paddingLeft: 16,
  },
  logoText: {
    paddingTop: 15,
    paddingLeft: 8,
    fontSize: 16,
    color: "white",
  },
  hamburger: {
    paddingTop: 12,
    paddingRight: 16,
  },
};

const componentStyles = {
  circle: {
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 30 / 2,
    textAlign: "center",
    fontSize: 20,
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  buttonCool: {
    color: "white",
    backgroundColor: colors.cool,
  },
  textNode: {
    fontSize: 16,
  },
  money: {
    color: colors.money,
    fontWeight: "bold",
  },
  paddingBox: {
    padding: 18,
  },
  mainContentArea: {
    marginTop: 0,
  },
  colorPrimary: {
    color: colors.primary,
  },
  container: {
    backgroundColor: colors.primary,
    marginTop: 30,
    zIndex: 0,
  },
  interiorBody: {
    backgroundColor: "white",
    height: "100%",
  },
  standardImg: {
    width: "100%",
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  body: {
    marginTop: 0,
  },
  headerButton: {
    paddingRight: 0,
    marginRight: 0,
  },
  introImage: {
    width: 50,
    height: 50,
  },
  textStyles: {
    marginTop: 1,
  },
  gridLeft: {
    marginTop: 0,
  },
  appMainHeader: {
    backgroundColor: colors.other,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    width: "75%",
    alignSelf: "center",
  },
};

export { componentStyles, headerStyles, colors, spacingStyles };
