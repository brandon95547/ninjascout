import React from "react";
import { View, Text, ScrollView } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import scanResultsChartStyles from "../theme/components/scanResultsChart";
import base from "../theme/base";

export default class ScanResultsChart extends React.Component {
  filterTitle (title) {
    title = title ? title.replace('New Listing', '') : ''
    return title
  }

  render () { 
    if (this.props.items && this.props.items.length > 0) {
      return (
        <ScrollView style={scanResultsChartStyles.scanResultsChartWrap}>
          {this.props.items.map((element, i) => {
            const title = element.ebay_sales_title
            const price = `$${Math.trunc(element.ebay_sales_price)}`
            return <View key={i} style={{ ...baseStyles.mt3 }}>
              <View style={{ ...scanResultsChartStyles.scanResultsChartInner }}>
                <View style={{ ...scanResultsChartStyles.scanResultsChartRow }}>
                  <Text style={{ ...scanResultsChartStyles.scanResultsChartLabel }}>{this.filterTitle(title)}</Text>
                  <Text style={{ ...scanResultsChartStyles.scanResultsChartPrice }}>{price}</Text>
                </View>
              </View>
            </View>
          })}
        </ScrollView>
      )
    } else if (this.props.items === null) {
      return <View style={{ ...scanResultsChartStyles.directions, ...baseStyles.mt3 }}><Text style={{ ...scanResultsChartStyles.directionsText }}>Please key enter or scan an item below:</Text></View>
    } else {
      return <View style={{ ...scanResultsChartStyles.directions, ...baseStyles.mt3 }}><Text style={{ ...scanResultsChartStyles.directionsText }}>There are no results for your search:</Text></View>
    }
  }
}