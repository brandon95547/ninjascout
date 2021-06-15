import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProvider } from "./UserContext";
// screens
import HomeScreen from "./components/screens/HomeScreen";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
import Scout from "./components/screens/Scout";
import { componentStyles, colors } from "./src/GlobalStyles";
import SideBar from "./components/SideBar";

const global = require("./src/styles/global");

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  drawerContent = (navigation) => {
    return (
      <TouchableOpacity style={global.animatedBox}>
        <SideBar navigation={navigation} toggleOpen={this.toggleOpen} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
              initialParams={{
                drawerContent: this.drawerContent,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
              initialParams={{
                drawerContent: this.drawerContent,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Sign Up" }}
              initialParams={{
                drawerContent: this.drawerContent,
              }}
            />
            <Stack.Screen
              name="Scout"
              component={Scout}
              options={{ title: "Scout" }}
              initialParams={{
                drawerContent: this.drawerContent,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
}
