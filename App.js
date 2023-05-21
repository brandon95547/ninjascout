// import { StatusBar } from "expo-status-bar"

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import * as RootNavigation from './RootNavigation.js';
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootSiblingParent } from 'react-native-root-siblings'
import { Utilities } from "./utilities"
import * as ScreenOrientation from 'expo-screen-orientation'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import pages
import HomeScreen from "./pages/HomeScreen"
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login"
import Logoff from "./pages/Logoff"
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"
import Scan from "./pages/Scan"

// const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
// lock the orientation to portrait mode
ScreenOrientation.lockAsync(2)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      user: null
    }
  }

  async fn() {
    await AsyncStorage.removeItem('user')
  }

  componentDidMount() {
    this.utilities = new Utilities
    this.utilities.loadFonts(() => this.setState({ fontsLoaded: true }))
  }

  async componentDidUpdate() {
    const user = await AsyncStorage.getItem('user')
    this.setState({ user: JSON.parse(user) })
  }

  render() {
    const logoff = this.state.user ? <Drawer.Screen name="Logoff" component={Logoff} initialParams={{ fn: this.fn }} /> : <></>
    const settings = this.state.user ? <Drawer.Screen name="Settings" component={Settings} /> : <></>
    const create = !this.state.user ? <Drawer.Screen name="Create Account" component={CreateAccount} /> : <></>
    const dashboard = this.state.user ? <Drawer.Screen name="Dashboard" component={Dashboard} /> : <></>
    const login = !this.state.user ? <Drawer.Screen name="Login" component={Login} /> : <></>
    const scan = this.state.user ? <Drawer.Screen name="Scan" component={Scan} /> : <></>
    if (this.state.fontsLoaded) {
      return (
        <RootSiblingParent>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
              {dashboard}
              {create}
              {scan}
              {settings}
              {logoff}
              {login}
            </Drawer.Navigator>
          </NavigationContainer>
        </RootSiblingParent>
      )
    } else {
      return null
    }
  }
}
