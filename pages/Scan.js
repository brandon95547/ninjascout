import { Text, View, ScrollView, Image, KeyboardAvoidingView, TextInput } from "react-native";
import { theme } from "../theme/variables"
import ScanResults from "../components/scanResults";
import ScanResultsChart from "../components/scanResultsChart";
import ScanForm from "../components/scanForm";
import React from "react";
import baseStyles from "../theme/base";
import scanResultsStyles from "../theme/components/scanResults";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class Scan extends React.Component {
  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 60
    return (
      <ScrollView contentContainerStyle={{...baseStyles.container}}>
        <KeyboardAvoidingView style={baseStyles.keyboardInner} contentContainerStyle={baseStyles.keyboard} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={baseStyles.grow}>
            <ScanResults />
            <ScanResultsChart />
            <View style={{...scanResultsStyles.scanResultWrap, ...baseStyles.mt2, ...baseStyles.mb3}}>
              <Ionicons name="md-checkmark-circle" size={32} color={theme.success} />
              <Text style={{...scanResultsStyles.scanResultPass, ...baseStyles.ml_3}}>Pass!</Text>
            </View>
          </View>
          <ScanForm />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
