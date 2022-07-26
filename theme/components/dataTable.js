import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  dataTableText: {
    fontSize: 18,
    marginLeft: 20
  },
  dataTableEnd: {
    marginLeft: "auto",
    fontSize: 20,
    fontWeight: "bold",
    minWidth: 40,
    textAlign: "center"
  },
});
