import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    backgroundColor: "#335979",
    color: "white",
    paddingVertical: 15,
    borderRadius: 4,
    width: "100%",
    paddingLeft: 60
  },
  inputWrap: {
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
    top: 7,
    color: '#CCC'
  },
  // spacing classes
  mt1: {
    marginTop: 12
  },
  mb1: {
    marginBottom: 12
  }
});
