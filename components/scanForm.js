import React from "react"
import { View, TextInput, TouchableOpacity, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import baseStyles from "../theme/base"
import scanFormStyles from "../theme/components/scanForm"

export default class ScanForm extends React.Component {
  state = { scanItem: '' }

  searchFilters = (keyword) => {
    // these normalization filters must match the ones on the cron job backend
    keyword = keyword.replace(' sneakers', ' shoes')
    keyword = keyword.replace(' sneaker', ' shoes')
    keyword = keyword.replace(' vtg', ' vintage')
    keyword = keyword.replace(' bros', ' brothers')
    keyword = keyword.replace('vtg ', 'vintage ')
    keyword = keyword.replace('salamon', 'salomon')
    keyword = keyword.replace('-', ' ')
    // we don't want to convert boots to bootss
    if (!keyword.includes('boots')) {
      keyword = keyword.replace(' boot', ' boots')
    }
    if (!keyword.includes('cabelas')) {
      keyword = keyword.replace('cabela', 'cabelas')
    }
    return keyword.trim()
  }

  scan = () => {
    this.props.scan(this.searchFilters(this.state.scanItem))
  }

  render() { 
    const isSubmitDisabled = this.props.isLoading || this.state.scanItem.length <= 3
    return (
      <View style={{...scanFormStyles.scanFormWrap}}>
        <TextInput
            style={scanFormStyles.input}
            placeholder="Scan or Key Enter Item"
            placeholderTextColor="#444"
            autoCapitalize="none"
            onChangeText={(scanItem) => this.setState({scanItem: scanItem})}
            autoCorrect={false}
            onSubmitEditing={this.scan}
            value={this.state.scanItem}
          />
          <TouchableOpacity disabled={isSubmitDisabled} style={[scanFormStyles.scanButton, isSubmitDisabled && scanFormStyles.disabled]} onPress={this.scan}>
            <Text style={{...scanFormStyles.scanButtonText, ...baseStyles.text3, ...baseStyles.mr2}}>Scan</Text>
            <Ionicons name="md-scan" size={24} color="white" />
          </TouchableOpacity>
      </View>
    )
  }
}