// import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput } from "react-native";
import React from "react";
import styles from "./theme/base";
import header from "./theme/header";

export default function App() {
  const [text, onChangeText] = React.useState("Email");
  return (
    <View style={styles.container}>
      <Image style={header.logo} source={require("./assets/ninja.png")} />
      <Text style={header.logoText}>Ninja Scout!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}
