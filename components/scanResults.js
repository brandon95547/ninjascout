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
      <View style={{ ...scanResultsStyles.scanResultsWrap }}>
        <Text style={{ ...scanResultsStyles.scanResultsText, ...baseStyles.text7, ...baseStyles.textBold }}>$65</Text>
        <Text style={{ ...scanResultsStyles.scanResultsText, ...baseStyles.text2 }}>Average Sell Price</Text>
        <Text style={{ ...scanResultsStyles.scanResultsText, ...baseStyles.colorLight2, ...baseStyles.ph3, ...baseStyles.mt2 }}>Below are the most recent <Text style={baseStyles.textBold}>low</Text>,<Text style={baseStyles.textBold}> average</Text> and <Text style={baseStyles.textBold}>high</Text> sold listing prices for this item.</Text>
        <Tabs />
      </View>
    );
  }
}