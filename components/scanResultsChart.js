import React from "react";
import { View, Text, ScrollView } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import scanResultsChartStyles from "../theme/components/scanResultsChart";
import base from "../theme/base";

export default class ScanResultsChart extends React.Component {
  render() { 
    if (this.props.items.length) {
      return (
        <ScrollView style={scanResultsChartStyles.scanResultsChartWrap}>
          {this.props.items.map((element, i) => {
            const title = element.ebay_sales_title
            const price = `$${Math.trunc(element.ebay_sales_price)}`
            return <View key={i} style={{ ...baseStyles.mt3 }}>
              <View style={{ ...scanResultsChartStyles.scanResultsChartInner }}>
                <View style={{ ...scanResultsChartStyles.scanResultsChartRow }}>
                  <Text style={{ ...scanResultsChartStyles.scanResultsChartLabel }}>{title}</Text>
                  <Text style={{ ...scanResultsChartStyles.scanResultsChartPrice }}>{price}</Text>
                </View>
              </View>
            </View>
          })}
        </ScrollView>
      )
    } else {
      return <View style={{ ...scanResultsChartStyles.directions, ...baseStyles.mt3 }}><Text style={{ ...scanResultsChartStyles.directionsText }}>Please key enter or scan an item below:</Text></View>
    }
  }
}