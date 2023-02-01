import React from "react";
import { View, Text } from "react-native";
import baseStyles from "../theme/base";
import tabsStyles from "../theme/components/tabs";

export default class Tabs extends React.Component { 
  render() { 
    return (
      <View style={{...tabsStyles.tabsWrap, ...baseStyles.mt3}}>
        <View style={{...tabsStyles.tab}}>
          <Text style={{...tabsStyles.tabText}}>Low</Text>
          <Text style={{...tabsStyles.tabValue}}>${this.props.low}</Text>
        </View>
        <View style={{...tabsStyles.tab, ...baseStyles.backgroundWhite}}>
          <Text style={{...tabsStyles.tabText}}>Average</Text>
          <Text style={{...tabsStyles.tabValue, ...baseStyles.colorSuccess}}>${this.props.avg}</Text>
        </View>
        <View style={{...tabsStyles.tab}}>
          <Text style={{...tabsStyles.tabText}}>High</Text>
          <Text style={{...tabsStyles.tabValue}}>${this.props.high}</Text>
        </View>
      </View>
    );
  }
}