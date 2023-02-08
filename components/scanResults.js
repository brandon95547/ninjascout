import React from "react";
import { View, Text, Image } from "react-native";
import Tabs from "../components/tabs";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import scanResultsStyles from "../theme/components/scanResults";
import base from "../theme/base";

export default class ScanResults extends React.Component { 
  render() { 

    const tabsDataTop = this.props.tabsDataTop
    const tabsDataBottom = this.props.tabsDataBottom
    const theme = this.props.theme

    return (
      <View style={scanResultsStyles.scanResultsWrap}>
        <Tabs type="top" theme={theme} data={tabsDataTop} />
        <Tabs type="bottom" theme="dark" data={tabsDataBottom} />
      </View>
    );
  }
}