import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import PlayerBadge from "../components/playerBadge";
import DataTable from "../components/dataTable";
import Ionicons from "@expo/vector-icons/Ionicons";
import Toast from 'react-native-root-toast'; 
import React from "react";
import { theme } from "../theme/variables"
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
      <ScrollView contentContainerStyle={{...baseStyles.container, ...baseStyles.backgroundWhite}}>
        <PlayerBadge />
        <DataTable />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Scan')} style={{...dashboardStyles.scanButton}}>
           <Text style={{...dashboardStyles.scanButtonText, ...baseStyles.text3, ...baseStyles.mr2}}>Begin Scanning</Text>
           <Ionicons name="md-scan" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
