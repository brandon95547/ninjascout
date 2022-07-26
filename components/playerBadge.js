import React from "react";
import { View, Text, Image } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import playerBadgeStyles from "../theme/components/playerBadge";

export default class PlayerBadge extends React.Component { 
  render() { 
    return (
      <View style={{ ...playerBadgeStyles.badgeWrap, ...baseStyles.pv3 }}>
        <Image style={{...playerBadgeStyles.badge, ...baseStyles.ml2}} source={require("../assets/ninja.png")} />
        <View style={baseStyles.ml3}>
          <Text style={{...baseStyles.textBold, ...baseStyles.text4, ...baseStyles.colorWhite}}>Makia</Text>
          <Text style={{...baseStyles.textBold, ...baseStyles.text2, ...baseStyles.colorWhite}}>Level <Text style={baseStyles.text3}>1</Text></Text>
          <Ionicons name="md-star" size={16} color="yellow" />
        </View>
      </View>
    );
  }
}