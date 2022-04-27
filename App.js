// import { StatusBar } from "expo-status-bar";
// import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./pages/HomeScreen";
import CreateAccount from "./pages/CreateAccount";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      password: "",
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Montserrat-SemiBold": {
        uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen name="Profile" component={CreateAccount} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}
