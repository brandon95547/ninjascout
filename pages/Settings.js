import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from "react-native"
import PlayerBadge from "../components/playerBadge"
import SettingsModule from "../components/settingsModule"
import Ionicons from "@expo/vector-icons/Ionicons"
import Toast from 'react-native-root-toast' 
import React from "react"
import { theme } from "../theme/variables"
import dashboardStyles from "../theme/dashboard"
import baseStyles from "../theme/base"
import axios from 'axios'
import Constants from 'expo-constants'
import { Utilities } from "../utilities"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      apiEndpoint: Constants.manifest.extra.apiEndpoint,
      utilities: null,
      user: null
    }
  }

  async componentDidMount() {
    this.utilities = new Utilities
    this.props.navigation.addListener('focus', async() => {
      const user = await AsyncStorage.getItem('user')
      this.setState({ user: JSON.parse(user) })
      if (!user) {
        this.props.navigation.navigate('Home')
      }
    })
  }

  render() {
    return (
      <View contentContainerStyle={{...baseStyles.container, ...baseStyles.backgroundWhite}}>
        <PlayerBadge user={this.state.user} />
        <SettingsModule user={this.state.user} />
      </View>
    )
  }
}
