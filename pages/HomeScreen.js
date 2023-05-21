
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native"
import React from "react"
import baseStyles from "../theme/base"
import homeStyles from "../theme/home"
import header from "../theme/header"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      user: null
    }
  }

  async componentDidMount() {
    this.props.navigation.addListener('focus', async() => {
      const user = await AsyncStorage.getItem('user')
      this.setState({ user: JSON.parse(user) })
    })
  }

  render() {

    const cta = this.state.user ? <View style={homeStyles.inputWrap}>
    <TouchableOpacity style={baseStyles.button} onPress={() => this.props.navigation.navigate('Dashboard')}>
      <Text style={{ ...baseStyles.cWhite, ...baseStyles.buttonText }}>
        USER DASHBOARD
      </Text>
    </TouchableOpacity>
  </View> : <View style={homeStyles.inputWrap}>
    <TouchableOpacity style={baseStyles.button} onPress={() => this.props.navigation.navigate('Create Account')}>
      <Text style={{ ...baseStyles.cWhite, ...baseStyles.buttonText }}>
        SIGN UP
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Login')}
      style={{
        ...baseStyles.mt2,
        ...baseStyles.button,
        ...baseStyles.buttonWhite,
      }}
    >
      <Text style={{ ...baseStyles.cDark, ...baseStyles.buttonText }}>LOGIN</Text>
    </TouchableOpacity>
  </View>

    return (
      <ScrollView contentContainerStyle={{...homeStyles.container, ...baseStyles.backgroundPrimary}}>
        <Image style={header.logo} source={require("../assets/ninja.png")} />
        <Text style={header.logoText}>Ninja Scout</Text>
        {cta}
      </ScrollView>
    )
  }
}
