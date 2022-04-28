// import { StatusBar } from "expo-status-bar";
// import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { loadFonts } from "./utilities";

// import pages
import HomeScreen from "./pages/HomeScreen";
import CreateAccount from "./pages/CreateAccount";

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

  componentDidMount() {
    loadFonts(this.resourcesLoaded);
  }

  // using arrow functions keeps scope for this
  resourcesLoaded = () => {
    this.setState({ fontsLoaded: true });
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
