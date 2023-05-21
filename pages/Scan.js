import { Text, View, ScrollView, Image, KeyboardAvoidingView, TextInput } from "react-native"
import axios from 'axios'
import ScanResults from "../components/scanResults"
import ScanResultsChart from "../components/scanResultsChart"
import ScanForm from "../components/scanForm"
import React from "react"
import baseStyles from "../theme/base"
import scanStyles from "../theme/scan"
import Constants from 'expo-constants'
import scanResultsStyles from "../theme/components/scanResults"
import { Utilities } from "../utilities"
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    rank: 0,
    profit: 0,
    theme: 'normal',
    successLabel: 'Status',
    totalItems: 0,
    user: null,
    showLevelUp: false
  }

  componentDidMount() {
    this.utilities = new Utilities
    this.props.navigation.addListener('focus', async() => {
      const user = await AsyncStorage.getItem('user')
      this.setState({ user: JSON.parse(user) })
      if (!user) {
        this.props.navigation.navigate('Home')
      }
    })
  }

  scan = (item) => {
    this.setState({ isLoading: true })
    if (item) {
      axios.get(`${this.state.apiEndpoint}/sales`, {
        params: {
          keyword: item.toLowerCase(),
          user: this.state.user
        }
      })
      .then(async response => {
        const salesData = {
          items: response.data.sales,
        }
        this.setState({ items: salesData.items.slice(0, 50) })
        this.setState({ lowSoldValue: response.data.lowPrice })
        this.setState({ highSoldValue: response.data.highPrice })
        this.setState({ avgSoldValue: response.data.averagePrice })
        this.setState({ profit: response.data.profit })
        this.setState({ rank: response.data.rank })
        this.setState({ isLoading: false })
        this.setState({ totalItems: salesData.items.length })
        AsyncStorage.setItem('user', JSON.stringify(response.data.user))

        const scans = response.data.user.ebay_sales_user_scans
        if (scans === 100 || scans === 500 || scans === 1000 || scans === 5000) {
          this.setState({ showLevelUp: true })
          setTimeout(() => {
            this.setState({ showLevelUp: false })
          }, 3500)
          this.utilities.playSound('levelUp')
        }

        switch(this.state.rank) {
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
            this.setState({ successLabel: 'NO GOOD' })
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
    const levelUpImg = this.state.showLevelUp ? <Image style={scanStyles.logo} source={require("../assets/img/f3ed8c_6efddf2a505f463689392146a9e43195~mv2.gif")} /> : <></>
    return (
      <ScrollView contentContainerStyle={{...baseStyles.container}}>
        <KeyboardAvoidingView style={baseStyles.keyboardInner} contentContainerStyle={baseStyles.keyboard} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={[baseStyles.grow, baseStyles.pb4]}>
            <ScanResults theme={this.state.theme} tabsDataTop={tabsDataTop} tabsDataBottom={tabsDataBottom} />
            <View style={scanStyles.logoWrap}>
              {levelUpImg}
            </View>
            {scanResultsChart}
          </View>
          <ScanForm scan={this.scan} isLoading={this.state.isLoading} />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
