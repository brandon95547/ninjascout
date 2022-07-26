import React from "react";
import { View, Text } from "react-native";
import baseStyles from "../theme/base";
import dataTableStyles from "../theme/components/dataTable";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class DataTable extends React.Component { 
  render() { 
    return (
      <View style={{...dataTableStyles.dataTableWrap, ...baseStyles.pv1}}>
        <View style={{ ...dataTableStyles.dataTable }}>
          <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundTeal}}>
              <Ionicons name="md-stats-chart" size={24} color="white" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Scans</Text>
            <Text style={dataTableStyles.dataTableEnd}>9</Text>
          </View>
        </View>
        <View style={{ ...dataTableStyles.dataTable }}>
        <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundViolet}}>
              <Ionicons name="md-pricetag" size={24} color="white" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Brands Scanned</Text>
            <Text style={dataTableStyles.dataTableEnd}>5</Text>
          </View>
        </View>
        <View style={{ ...dataTableStyles.dataTable }}>
        <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundGold}}>
              <Ionicons name="md-map" size={24} color="white" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Treasure Found</Text>
            <Text style={dataTableStyles.dataTableEnd}>3</Text>
          </View>
        </View>
        <View style={{ ...dataTableStyles.dataTable }}>
        <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundSuccess}}>
              <Ionicons name="md-logo-usd" size={24} color="white" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Success Rate</Text>
            <Text style={dataTableStyles.dataTableEnd}>10%</Text>
          </View>
        </View>
      </View>
    );
  }
}