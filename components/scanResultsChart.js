import React from "react";
import { View, Text } from "react-native";
import baseStyles from "../theme/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import scanResultsChartStyles from "../theme/components/scanResultsChart";
import base from "../theme/base";

export default class ScanResultsChart extends React.Component { 
  render() { 
    return (
      <View style={{ ...scanResultsChartStyles.scanResultsChartWrap, ...baseStyles.mt3 }}>
        <View style={{ ...scanResultsChartStyles.scanResultsChartInner }}>
          <View style={{ ...scanResultsChartStyles.scanResultsChartRow }}>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartLabel }}>Sales</Text>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartData }}>0%</Text>
          </View>
        </View>
        <View style={{ ...scanResultsChartStyles.scanResultsChartInner }}>
          <View style={{ ...scanResultsChartStyles.scanResultsChartRow }}>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartLabel }}>Sales</Text>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartData }}>0%</Text>
          </View>
        </View>
        <View style={{ ...scanResultsChartStyles.scanResultsChartInner }}>
          <View style={{ ...scanResultsChartStyles.scanResultsChartRow }}>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartLabel }}>Sales</Text>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartData }}>0%</Text>
          </View>
        </View>
        <View style={{ ...scanResultsChartStyles.scanResultsChartInner }}>
          <View style={{ ...scanResultsChartStyles.scanResultsChartRow }}>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartLabel }}>Sales</Text>
            <Text style={{ ...scanResultsChartStyles.scanResultsChartData }}>0%</Text>
          </View>
        </View>
      </View>
    );
  }
}