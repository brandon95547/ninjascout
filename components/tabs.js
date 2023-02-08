import React from "react";
import { View, Text } from "react-native";
import base from "../theme/base";
import baseStyles from "../theme/base";
import tabsStyles from "../theme/components/tabs";
import Ionicons from "@expo/vector-icons/Ionicons"

export default class Tabs extends React.Component { 
  render() { 
    const theme = this.props.theme
    const data = this.props.data
    const type = this.props.type 
    
    switch (theme) {
      case 'fire' :
        var wrapperStyle = tabsStyles.fire
        var tabLabelStyle = [baseStyles.colorBlack]
        var tabValueStyle = [baseStyles.ml1a, baseStyles.text2, baseStyles.colorWhite]
        break 
      case 'failure' :
        var wrapperStyle = tabsStyles.failure
        var tabLabelStyle = [baseStyles.colorBlack]
        var tabValueStyle = [baseStyles.ml1a, baseStyles.text2, baseStyles.colorWhite]
        break 
      case 'normal' :
        var wrapperStyle = tabsStyles.normal
        var tabLabelStyle = baseStyles.colorBlack
        var tabValueStyle = [baseStyles.colorWhite, baseStyles.text2]
        break 
      case 'success' :
        var wrapperStyle = tabsStyles.success
        var tabLabelStyle = baseStyles.colorBlack
        var tabValueStyle = [baseStyles.colorWhite, baseStyles.text2]
        break 
      case 'dark' :
        var wrapperStyle = tabsStyles.dark
        var tabLabelStyle = baseStyles.colorWhite
        var tabValueStyle = [baseStyles.colorWhite, baseStyles.text2]
        break 
      default :
        var wrapperStyle = tabsStyles.light
        var tabLabelStyle = baseStyles.colorWhite
        var tabValueStyle = baseStyles.colorWhite
    }
    
    let col1 = <View style={tabsStyles.tab}><Text style={tabLabelStyle}>{data.col1.label}</Text><Text style={tabValueStyle}>{data.col1.value}</Text></View>
    let col2 = <View style={tabsStyles.tab}><Text style={tabLabelStyle}>{data.col2.label}</Text><Text style={[tabValueStyle, baseStyles.colorSuccessLight, baseStyles.textBold, baseStyles.text3]}>{data.col2.value}</Text></View>
    let col3 = <View style={tabsStyles.tab}><Text style={tabLabelStyle}>{data.col3.label}</Text><Text style={tabValueStyle}>{data.col3.value}</Text></View>
    const fireIcon = theme === 'fire' ? <Ionicons name="flame" size={24} color="#FFCE00" /> : <></>
    if (type === 'top') {
      col2 = <View style={tabsStyles.tab}>
        <View style={baseStyles.flexH}>
          {fireIcon}
          <Text style={[[baseStyles.ml1a, baseStyles.text2, (theme === 'fire' ? baseStyles.colorYellow : baseStyles.colorWhite), baseStyles.textBold], baseStyles.mr2]}>{data.col2.label}</Text>
        </View>
      </View>
    }
    return (
      <View style={[wrapperStyle, tabsStyles.tabsWrap]}>
        {col1}
        {col2}
        {col3}
      </View>
    );
  }
}