import React from "react"
import { View, TextInput, TouchableOpacity, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import baseStyles from "../theme/base"
import scanFormStyles from "../theme/components/scanForm"

export default class ScanForm extends React.Component {
  state = { scanItem: '' }

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
            value={this.state.scanItem}
          />
          <TouchableOpacity disabled={isSubmitDisabled} style={[scanFormStyles.scanButton, isSubmitDisabled && scanFormStyles.disabled]} onPress={() => this.props.scan(this.state.scanItem)}>
            <Text style={{...scanFormStyles.scanButtonText, ...baseStyles.text3, ...baseStyles.mr2}}>Scan</Text>
            <Ionicons name="md-scan" size={24} color="white" />
          </TouchableOpacity>
      </View>
    )
  }
}