import { StyleSheet } from "react-native";

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
  ph1: {
    paddingHorizontal: 20
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
    justifyContent: "space-evenly"
  },
  circleIconWrap: {
    borderWidth: 1,
    borderRadius: 64 / 2,
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
