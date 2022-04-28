import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 46,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "90%",
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 46,
    paddingVertical: 16,
    width: "80%",
  },
  buttonWhite: {
    backgroundColor: "white",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  inputIcon: {
    position: "absolute",
    left: 16,
    zIndex: 1,
    top: 7,
    color: "#CCC",
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
  // color classes
  cWhite: {
    color: "white",
  },
  cDark: {
    color: "#111",
  },
});
