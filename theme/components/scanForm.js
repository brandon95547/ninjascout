import { StyleSheet } from "react-native";
import { theme } from "../../theme/variables"

export default StyleSheet.create({
  scanFormWrap: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: '#CCC',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#BBB"
  },
  input: {
    borderWidth: 1,
    borderColor: theme.prominent,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: theme.light,
    width: "80%",
    color: "#222",
    fontSize: 16
  },
  scanButton: {
    marginTop: 16,
    backgroundColor: theme.prominent,
    paddingHorizontal: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 28,
  },
  disabled: {
    opacity: .3,
  },
  scanButtonText: {
    color: "white",
    fontWeight: "bold"
  }
});
