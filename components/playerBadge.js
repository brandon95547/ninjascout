import React from "react";
import { View, Text, Image } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import playerBadgeStyles from "../theme/components/playerBadge";
import AsyncStorage from '@react-native-async-storage/async-storage'
import base from "../theme/base";

export default class PlayerBadge extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: { 
        nick: '', 
        email: '', 
        password: '' 
      }
    }
  }

  async componentDidMount() {
    const user = await AsyncStorage.getItem('user')
    this.setState({ user: JSON.parse(user) })
    console.log(this.state.user)
  }

  render() { 
    return (
      <View style={{ ...playerBadgeStyles.badgeWrap, ...baseStyles.pv3, ...baseStyles.backgroundPrimary }}>
        <Image style={{...playerBadgeStyles.badge, ...baseStyles.ml3}} source={require("../assets/ninja.png")} />
        <View style={baseStyles.ml3}>
          <Text style={{...baseStyles.textBold, ...baseStyles.text4, ...baseStyles.colorWhite}}>{this.state.user.nick}</Text>
          <View style={{...playerBadgeStyles.badgeLevelWrap}}>
            <Text style={{...baseStyles.mr1, ...baseStyles.textBold, ...baseStyles.text2, ...baseStyles.colorWhite}}>Level <Text style={baseStyles.text3}>1</Text></Text>
            <Ionicons style={baseStyles.mr_3} name="md-star" size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name="md-star-outline" size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name="md-star-outline" size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name="md-star-outline" size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name="md-star-outline" size={20} color="yellow" />
          </View>
        </View>
      </View>
    );
  }
}