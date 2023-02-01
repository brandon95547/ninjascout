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
    items: null,
    lowSoldValue: 0,
    highSoldValue: 0,
    avgSoldValue: 0,
    rank: 0
  }

  componentDidMount() {
    this.utilities = new Utilities
  }

  getLowSoldValue(rows) {
    const items = []
    rows.forEach(item => {
      items.push(Number(item.ebay_sales_price))
    })
    return items.length ? Math.min.apply(Math, items).toFixed(2) : 0
  }

  getHighSoldValue(rows) {
    const items = []
    rows.forEach(item => {
      items.push(Number(item.ebay_sales_price))
    })
    return items.length ? Math.max.apply(Math, items).toFixed(2) : 0
  }

  getAverageValue(rows) {
    var total = 0
    const items = []
    rows.forEach(item => {
      items.push(Number(item.ebay_sales_price))
      total += Number(item.ebay_sales_price)
    })
    console.log('count', items.length)
    var avg = total / items.length
    return items.length ? avg.toFixed(2) : 0
  }

  getRank() {
    let rank = 0
    const lowSoldValue = this.state.lowSoldValue
    if (lowSoldValue >= 19) {
      rank = 1
    } else if (lowSoldValue >= 25) {
      rank = 2
    } else if (lowSoldValue >= 30) {
      rank = 3
    } else if (lowSoldValue >= 40) {
      rank = 4
    } else if (lowSoldValue >= 50) {
      rank = 5
    } else if (lowSoldValue >= 60) {
      rank = 6
    } else if (lowSoldValue >= 70) {
      rank = 7
    } else if (lowSoldValue >= 80) {
      rank = 8
    }
    return rank
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
        this.setState({ items: salesData.items.slice(0, 50) })
        this.setState({ lowSoldValue: this.getLowSoldValue(salesData.items) })
        this.setState({ highSoldValue: this.getHighSoldValue(salesData.items) })
        this.setState({ avgSoldValue: this.getAverageValue(salesData.items) })
        this.setState({ rank: this.getRank()})
        this.setState({ isLoading: false })
        this.utilities.playSound('success')
      })
      .catch(err => {
        this.utilities.showToast(err.message)
        this.setState({ isLoading: false })
      })
    } else {
        this.utilities.showToast('Please key enter or scan an item first.')
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 3000)
    }
  }

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 60
    const scanResultsChart = <ScanResultsChart items={this.state.items} />
    return (
      <ScrollView contentContainerStyle={{...baseStyles.container}}>
        <KeyboardAvoidingView style={baseStyles.keyboardInner} contentContainerStyle={baseStyles.keyboard} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={baseStyles.grow}>
            <Text>{this.state.isLoading ? '1' : '2'}</Text>
            <ScanResults low={this.state.lowSoldValue} high={this.state.highSoldValue} avg={this.state.avgSoldValue} />
            {scanResultsChart}
          </View>
          <ScanForm scan={this.scan} isLoading={this.state.isLoading} />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
