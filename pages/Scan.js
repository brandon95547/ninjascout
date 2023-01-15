import { Text, View, ScrollView, Image, KeyboardAvoidingView, TextInput } from "react-native"
import axios from 'axios'
import ScanResults from "../components/scanResults"
import ScanResultsChart from "../components/scanResultsChart"
import ScanForm from "../components/scanForm"
import React from "react"
import baseStyles from "../theme/base"
import Constants from 'expo-constants'
import scanResultsStyles from "../theme/components/scanResults"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Utilities } from "../utilities";

export default class Scan extends React.Component {
  state = {
    email: '',
    apiEndpoint: Constants.manifest.extra.apiEndpoint,
    isLoading: false,
    apiKey: Constants.manifest.extra.apiKey,
    items: [],
    lowSoldValue: 0
  }

  componentDidMount() {
    this.utilities = new Utilities
  }

  getLowSoldValue(rows) {
    const items = []
    rows.forEach(item => {
      items.push(Number(item.ebay_sales_price))
    })
    return Math.min.apply(Math, items)
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
        const salesData = {
          items: response.data.sales,
        }
        this.setState({ items: salesData.items.slice(0, 25) })
        this.setState({ lowSoldValue: this.getLowSoldValue(salesData.items) })
        this.utilities.playSound('success')
      })
      .catch(err => {
        this.utilities.showToast(err.message)
      })
        this.setState({ isLoading: false })
    } else {
        this.utilities.showToast('Please key enter or scan an item first.')
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
            <ScanResults low={this.state.lowSoldValue} />
            {scanResultsChart}
          </View>
          <ScanForm scan={this.scan} email="testing@gmail.com" />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
