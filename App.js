import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./theme/base";
import header from "./theme/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={header.logo} source={require("./assets/ninja.png")} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
