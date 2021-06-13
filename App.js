import React, { Component } from "react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProvider } from "./UserContext";
// screens
import HomeScreen from "./components/screens/HomeScreen";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Sign Up" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
}
