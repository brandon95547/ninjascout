import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import ScanResults from "../components/scanResults";
import ScanForm from "../components/scanForm";
import React from "react";
import { theme } from "../theme/variables"
import dashboardStyles from "../theme/dashboard";
import baseStyles from "../theme/base";
import Constants from 'expo-constants';
import { Utilities } from "../utilities";

export default class Scan extends React.Component {
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
        <ScanResults />
        <ScanForm />
      </ScrollView>
    );
  }
}
