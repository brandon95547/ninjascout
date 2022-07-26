import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Toast from 'react-native-root-toast'; 
import React from "react";
import { theme } from "../theme/variables"
import styles from "../theme/base";
import dashboardStyles from "../theme/dashboard";
import baseStyles from "../theme/base";
import axios from 'axios';
import Constants from 'expo-constants';
import { Utilities } from "../utilities";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      apiEndpoint: Constants.manifest.extra.apiEndpoint,
      utilities: null
    };
  }

  // using arrow functions keeps scope for this, lifecycle methods have scope to this by default
  componentDidMount() {
    this.utilities = new Utilities
  }

  render() {

    return (
      <ScrollView contentContainerStyle={dashboardStyles.container}>
        <View style={dashboardStyles.logoWrap}>
          <Text style={dashboardStyles.logoText}>Ninja<Text style={dashboardStyles.logoTextSpan}>Scout</Text></Text>
        </View>
        <View style={baseStyles.headingWrap}>
          <Text style={baseStyles.heading1}>Seller Level</Text>
          <Text style={baseStyles.level}>Novice</Text>
          <Text style={{...baseStyles.text1, ...baseStyles.ph1}}>Your level will increase as you use the application.</Text>
        </View>
        <View style={{ ...baseStyles.mt3, ...baseStyles.dataTable }}>
          <View style={baseStyles.dataTableRow}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundTeal}}>
              <Ionicons name="md-stats-chart" size={32} color="white" />
            </View>
            <Text style={baseStyles.dataTableText}>Scans</Text>
            <Text style={baseStyles.dataTableEnd}>9</Text>
          </View>
        </View>
        <View style={{ ...baseStyles.mt3, ...baseStyles.dataTable }}>
          <View style={baseStyles.dataTableRow}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundViolet}}>
              <Ionicons name="md-pricetag" size={32} color="white" />
            </View>
            <Text style={baseStyles.dataTableText}>Brands Scanned</Text>
            <Text style={baseStyles.dataTableEnd}>9</Text>
          </View>
        </View>
        <View style={{ ...baseStyles.mt3, ...baseStyles.dataTable }}>
          <View style={baseStyles.dataTableRow}>
            <View style={{...baseStyles.circleIconWrap, ...baseStyles.backgroundSuccess}}>
              <Ionicons name="md-logo-usd" size={32} color="white" />
            </View>
            <Text style={baseStyles.dataTableText}>Treasure Found</Text>
            <Text style={baseStyles.dataTableEnd}>9</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
