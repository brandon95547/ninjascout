import React from "react";
import { View, Text, Image } from "react-native";
import Tabs from "../components/tabs";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import scanResultsStyles from "../theme/components/scanResults";
import base from "../theme/base";

export default class ScanResults extends React.Component { 
  render() { 
    return (
      <View style={scanResultsStyles.scanResultsWrap}>
        <Text style={[scanResultsStyles.scanResultsText, baseStyles.text6, baseStyles.textBold]}>${this.props.avg}</Text>
        <Text style={[scanResultsStyles.scanResultsText, baseStyles.text2]}>Average Sell Price</Text>
        <Tabs theme="light" low={this.props.low} high={this.props.high} avg={this.props.avg} />
        <Tabs theme="dark" low={this.props.low} high={this.props.high} avg={this.props.avg} />
      </View>
    );
  }
}