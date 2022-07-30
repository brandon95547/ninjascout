import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import baseStyles from "../theme/base";
import scanFormStyles from "../theme/components/scanForm";

export default class ScanForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanItem: '',
    };
  }

  render() { 
    return (
      <View style={{...scanFormStyles.scanFormWrap}}>
        <TextInput
            style={scanFormStyles.input}
            placeholder="Scan or Key Enter Item"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(scanItem) => this.setState({scanItem: scanItem})}
            value={this.state.scanItem}
          />
          <TouchableOpacity style={{...scanFormStyles.scanButton}}>
            <Text style={{...scanFormStyles.scanButtonText, ...baseStyles.text3, ...baseStyles.mr2}}>Scan</Text>
            <Ionicons name="md-scan" size={24} color="white" />
          </TouchableOpacity>
      </View>
    );
  }
}