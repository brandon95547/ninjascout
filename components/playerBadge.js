import React from "react";
import { View, Text, Image } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import playerBadgeStyles from "../theme/components/playerBadge";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class PlayerBadge extends React.Component {

  render() { 
    const level = this.props.user && this.props.user.ebay_sales_user_level
    if (this.props.user) {
      return (
        <View style={{ ...playerBadgeStyles.badgeWrap, ...baseStyles.pv3, ...baseStyles.backgroundPrimary }}>
        <Image style={{...playerBadgeStyles.badge, ...baseStyles.ml3}} source={require("../assets/ninja.png")} />
        <View style={baseStyles.ml3}>
          <Text style={{...baseStyles.textBold, ...baseStyles.text4, ...baseStyles.colorWhite}}>{this.props.user.ebay_sales_user_nickname}</Text>
          <View style={{...playerBadgeStyles.badgeLevelWrap}}>
            <Text style={{...baseStyles.mr1, ...baseStyles.textBold, ...baseStyles.text2, ...baseStyles.colorWhite}}>Level <Text style={baseStyles.text3}>{level}</Text></Text>
            <Ionicons style={baseStyles.mr_3} name="md-star" size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name={this.props.user.ebay_sales_user_level > 1 ? 'md-star' : 'md-star-outline'} size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name={this.props.user.ebay_sales_user_level > 2 ? 'md-star' : 'md-star-outline'} size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name={this.props.user.ebay_sales_user_level > 3 ? 'md-star' : 'md-star-outline'} size={20} color="yellow" />
            <Ionicons style={baseStyles.mr_3} name={this.props.user.ebay_sales_user_level > 4 ? 'md-star' : 'md-star-outline'} size={20} color="yellow" />
          </View>
        </View>
      </View>
      )
    } else {
      return null
    }
  }
}