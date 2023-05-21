import React from "react";
import { View, Text } from "react-native";
import baseStyles from "../theme/base";
import dataTableStyles from "../theme/components/dataTable";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class DataTable extends React.Component {
  render() {
    const scans = this.props.user && this.props.user.ebay_sales_user_scans
    const brands = this.props.user && this.props.user.ebay_sales_user_brands_scanned
    const treasure = this.props.user && this.props.user.ebay_sales_user_treasure_found
    const successRate = this.props.user && this.props.user.ebay_sales_user_scans ? (this.props.user.ebay_sales_user_treasure_found / this.props.user.ebay_sales_user_scans * 100).toFixed(0) : 0
    return (
      <View style={{...dataTableStyles.dataTableWrap, ...baseStyles.pv1}}>
        <View style={{ ...dataTableStyles.dataTable }}>
          <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundWhite}}>
              <Ionicons name="md-stats-chart" size={24} color="#222" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Scans</Text>
            <Text style={{...dataTableStyles.dataTableEnd, ...baseStyles.colorSuccess}}>{scans}</Text>
          </View>
        </View>
        <View style={{ ...dataTableStyles.dataTable }}>
        <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundWhite}}>
              <Ionicons name="md-pricetag" size={24} color="#222" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Common Brands Found</Text>
            <Text style={{...dataTableStyles.dataTableEnd, ...baseStyles.colorSuccess}}>{brands}</Text>
          </View>
        </View>
        <View style={{ ...dataTableStyles.dataTable }}>
        <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundWhite}}>
              <Ionicons name="md-map" size={24} color="#222" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Treasure Found</Text>
            <Text style={{...dataTableStyles.dataTableEnd, ...baseStyles.colorSuccess}}>{treasure}</Text>
          </View>
        </View>
        <View style={{ ...dataTableStyles.dataTable }}>
        <View style={{...baseStyles.pv2, ...dataTableStyles.dataTableRow}}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundWhite}}>
              <Ionicons name="md-logo-usd" size={24} color="#222" />
            </View>
            <Text style={dataTableStyles.dataTableText}>Success Rate</Text>
            <Text style={{...dataTableStyles.dataTableEnd, ...baseStyles.colorSuccess}}>{successRate}%</Text>
          </View>
        </View>
      </View>
    );
  }
}