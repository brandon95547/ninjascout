import { Text, View, ScrollView, Image, KeyboardAvoidingView, TextInput } from "react-native";
import { theme } from "../theme/variables"
import Toast from 'react-native-root-toast';
import axios from 'axios';
import ScanResults from "../components/scanResults";
import ScanResultsChart from "../components/scanResultsChart";
import ScanForm from "../components/scanForm";
import React from "react";
import baseStyles from "../theme/base";
import Constants from 'expo-constants';
import scanResultsStyles from "../theme/components/scanResults";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class Scan extends React.Component {
  state = {
    email: '',
    apiEndpoint: Constants.manifest.extra.apiEndpoint,
    isLoading: false,
    apiKey: Constants.manifest.extra.apiKey,
    items: []
  }

  scan = (item) => {
    this.setState({ isLoading: true })
    if (item) {
      axios.get(`${this.state.apiEndpoint}/sales`, {
        params: {
          keyword: item.toLowerCase()
        }
      })
      .then(response => {
        // console.log('response data', response.data);
        this.setState({ items: response.data.row })
      })
        .catch(function (err) {
        console.log(err)
      })
        this.setState({ isLoading: false })
    } else {
      Toast.show('Please key enter or scan an item first.', {
        duration: Toast.durations.LONG,
        backgroundColor: theme.complimentary
      });
      setTimeout(() => {
        this.setState({ isLoading: false })
      }, 3000)
    }
  }

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 60
    const scanResultsChart = this.state.items ? <ScanResultsChart items={this.state.items} /> : <></>
    // console.log('state', this.state)
    return (
      <ScrollView contentContainerStyle={{...baseStyles.container}}>
        <KeyboardAvoidingView style={baseStyles.keyboardInner} contentContainerStyle={baseStyles.keyboard} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={baseStyles.grow}>
            <ScanResults />
            {scanResultsChart}
            {/* <View style={{...scanResultsStyles.scanResultWrap, ...baseStyles.mt2, ...baseStyles.mb3}}>
              <Ionicons name="md-checkmark-circle" size={32} color={theme.success} />
              <Text style={{...scanResultsStyles.scanResultPass, ...baseStyles.ml_3}}>Pass!</Text>
            </View> */}
          </View>
          <ScanForm scan={this.scan} email="testing@gmail.com" />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
