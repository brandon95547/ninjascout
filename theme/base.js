import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#1f5e93",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  input: {
    backgroundColor: "#222",
    color: "white",
    paddingVertical: 15,
    borderRadius: 4,
    width: "100%",
    paddingLeft: 73
  },
  inputWrap: {
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  inputIcon: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
    top: 6,
    color: 'white'
  }
});
