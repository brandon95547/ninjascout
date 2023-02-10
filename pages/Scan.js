import { Text, View, ScrollView, Image, KeyboardAvoidingView, TextInput } from "react-native"
import axios from 'axios'
import ScanResults from "../components/scanResults"
import ScanResultsChart from "../components/scanResultsChart"
import ScanForm from "../components/scanForm"
import React from "react"
import baseStyles from "../theme/base"
import Constants from 'expo-constants'
import scanResultsStyles from "../theme/components/scanResults"
import { Utilities } from "../utilities";

export default class Scan extends React.Component {
  state = {
    email: '',
    apiEndpoint: Constants.manifest.extra.apiEndpoint,
    isLoading: false,
    apiKey: Constants.manifest.extra.apiKey,
    totalItems: [],
    items: null,
    lowSoldValue: 0,
    highSoldValue: 0,
    avgSoldValue: 0,
    rank: 0,
    profit: 0,
    theme: 'normal',
    successLabel: 'Status'
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
    var avg = total / items.length
    return items.length ? avg.toFixed(2) : 0
  }

  getTotalItems() {
    return this.state.totalItems.length
  }

  getProfit() {
    const cost = 6
    const finalValueFee = this.state.avgSoldValue * .1209
    const listingFee = .30
    return this.state.avgSoldValue ? (this.state.avgSoldValue - cost - finalValueFee - listingFee).toFixed(2) : 0
  }

  getRank() {
    let rank = 0
    const avgSoldValue = this.state.avgSoldValue
    const totalItems = this.getTotalItems()
    switch (true) {
      case avgSoldValue >= 65 && totalItems >= 12 :
        rank = 5
        break
      case avgSoldValue >= 50 && totalItems >= 8 :
        rank = 4
        break
      case avgSoldValue >= 35 && totalItems >= 4 :
        rank = 3
        break
      case avgSoldValue >= 20 && totalItems >= 3 :
        rank = 2
        break
      case avgSoldValue >= 15 && totalItems >= 1 :
        rank = 1
        break
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
        this.setState({ totalItems: salesData.items })
        this.setState({ lowSoldValue: this.getLowSoldValue(salesData.items) })
        this.setState({ highSoldValue: this.getHighSoldValue(salesData.items) })
        this.setState({ avgSoldValue: this.getAverageValue(salesData.items) })
        this.setState({ profit: this.getProfit()})
        this.setState({ rank: this.getRank()})
        this.setState({ isLoading: false })

        switch(this.getRank()) {
          case 1 :
            this.utilities.playSound('normal')
            this.setState({ theme: 'normal' })
            this.setState({ successLabel: 'Common' })
            break
          case 2 :
            this.utilities.playSound('success')
            this.setState({ theme: 'success' })
            this.setState({ successLabel: 'Success' })
            break
          case 3 :
            this.utilities.playSound('success')
            this.setState({ theme: 'success' })
            this.setState({ successLabel: 'Success' })
            break
          case 4 :
            this.utilities.playSound('success')
            this.setState({ theme: 'success' })
            this.setState({ successLabel: 'Success' })
            break
          case 5 :
            this.utilities.playSound('fire')
            this.setState({ theme: 'fire' })
            this.setState({ successLabel: 'FIRE' })
            break
          default :
            this.utilities.playSound('failure')
            this.setState({ theme: 'failure' })
            this.setState({ successLabel: 'FAILURE' })
        }
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
    let tabsDataTop = {
      col1: {
        label: 'Profit',
        value: `$${this.state.profit}`
      },
      col2: {
        label: this.state.successLabel,
        value: ''
      },
      col3: {
        label: 'Rank',
        value: `${this.state.rank}`
      }
    }
    let tabsDataBottom = {
      col1: {
        label: 'Low',
        value: `$${this.state.lowSoldValue}`
      },
      col2: {
        label: 'Average',
        value: `$${this.state.avgSoldValue}`
      },
      col3: {
        label: 'High',
        value: `$${this.state.highSoldValue}`
      }
    }
    return (
      <ScrollView contentContainerStyle={{...baseStyles.container}}>
        <KeyboardAvoidingView style={baseStyles.keyboardInner} contentContainerStyle={baseStyles.keyboard} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={baseStyles.grow}>
            <ScanResults theme={this.state.theme} tabsDataTop={tabsDataTop} tabsDataBottom={tabsDataBottom} />
            {scanResultsChart}
          </View>
          <ScanForm scan={this.scan} isLoading={this.state.isLoading} />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
