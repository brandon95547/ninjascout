// import { StatusBar } from "expo-status-bar"

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootSiblingParent } from 'react-native-root-siblings'
import { Utilities } from "./utilities"
import * as ScreenOrientation from 'expo-screen-orientation'

// import pages
import HomeScreen from "./pages/HomeScreen"
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Scan from "./pages/Scan"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
// lock the orientation to portrait mode
ScreenOrientation.lockAsync(2)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
    }
  }

  // using arrow functions keeps scope for this, lifecycle methods have scope to this by default
  componentDidMount() {
    this.utilities = new Utilities
    this.utilities.loadFonts(() => this.setState({ fontsLoaded: true }))
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <RootSiblingParent>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
              <Drawer.Screen name="Dashboard" component={Dashboard} />
              <Drawer.Screen name="Login" component={Login} options={{ drawerItemStyle: { display: 'none' } }} />
              <Drawer.Screen name="Create Account" component={CreateAccount} />
              <Drawer.Screen name="Scan" component={Scan} />
            </Drawer.Navigator>
          </NavigationContainer>
          {/* <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home" }}
              />
              <Stack.Screen name="Create Account" component={CreateAccount} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Scan" component={Scan} />
            </Stack.Navigator>
            </NavigationContainer> */}
          </RootSiblingParent>
      )
    } else {
      return null
    }
  }
}
