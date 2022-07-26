import React from "react";
import { View, Text, Image } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import playerBadgeStyles from "../theme/components/playerBadge";
import base from "../theme/base";

export default class PlayerBadge extends React.Component { 
  render() { 
    return (
      <View style={{ ...playerBadgeStyles.badgeWrap, ...baseStyles.pv3, ...baseStyles.backgroundPrimary }}>
        <Image style={{...playerBadgeStyles.badge, ...baseStyles.ml3}} source={require("../assets/ninja.png")} />
        <View style={baseStyles.ml3}>
          <Text style={{...baseStyles.textBold, ...baseStyles.text4, ...baseStyles.colorWhite}}>Makia</Text>
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