import { StyleSheet } from "react-native";
import { theme } from "../theme/variables"

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 200,
        marginLeft: 'auto'
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: 'black'
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      dataTableWrap: {
        display: 'flex',
        alignItems: 'center',
        height: '85%'
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
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#DDD"
      },
      settingLabel: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      input: {
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 10,
        minWidth: 50,
        textAlign: 'right'
      },
      switch: {
        marginLeft: 'auto'
      },
      dataTableEnd: {
        marginLeft: "auto",
        fontSize: 20,
        fontWeight: "bold",
        minWidth: 40,
        textAlign: "center"
      },
      imageStyle: {
        width: 24,
        height: 24,
      },
      saveButton: {
        marginTop: 'auto',
        marginBottom: 30,
        width: "60%",
        backgroundColor: theme.primary,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 28,
      },
      scanButtonText: {
        color: "white",
        fontWeight: "bold"
      }
})