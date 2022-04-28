// import { StatusBar } from "expo-status-bar";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Utilities } from "./utilities";

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
      utilities: null
    };
  }

  // using arrow functions keeps scope for this, lifecycle methods have scope to this by default
  componentDidMount() {
    this.utilities = new Utilities
    this.utilities.loadFonts(() => this.setState({ fontsLoaded: true }))
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen name="Create Account" component={CreateAccount} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}
