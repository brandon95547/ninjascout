import React from "react";
import { View, Text, TextInput, Switch, TouchableOpacity } from "react-native";
import baseStyles from "../theme/base";
import settingsStyles from "../theme/settings";
import { SelectCountry } from 'react-native-element-dropdown';
import { theme } from "../theme/variables"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Toast from 'react-native-root-toast'; 

const local_data = [
    {
      value: '#435285',
      lable: ' Default',
      image: require('../assets/img/swatches/2880x1800-default.jpg'),
    },
    {
      value: '#6AA8E3',
      lable: ' Aero',
      image: require('../assets/img/swatches/2880x1800-aero-solid-color-background.jpg'),
    },
    {
      value: '#A06CAF',
      lable: ' Violet',
      image: require('../assets/img/swatches/2880x1800-african-violet-solid-color-background.jpg'),
    },
    {
      value: '#4B7698',
      lable: ' Air Force Blue',
      image: require('../assets/img/swatches/2880x1800-air-force-blue-solid-color-background.jpg'),
    },
    {
      value: '#8F162B',
      lable: ' Crimson',
      image: require('../assets/img/swatches/2880x1800-alabama-crimson-solid-color-background.jpg'),
    },
    {
      value: '#B64E0E',
      lable: ' Orange',
      image: require('../assets/img/swatches/2880x1800-alloy-orange-solid-color-background.jpg'),
    },
    {
      value: '#DC103F',
      lable: ' Hot',
      image: require('../assets/img/swatches/2880x1800-amaranth-solid-color-background.jpg'),
    },
    {
      value: '#2E6845',
      lable: ' Amazon',
      image: require('../assets/img/swatches/2880x1800-amazon-solid-color-background.jpg'),
    },
    {
      value: '#7CAB03',
      lable: ' Apple Green',
      image: require('../assets/img/swatches/2880x1800-apple-green-solid-color-background.jpg'),
    },
    {
      value: '#759A59',
      lable: ' Asparagus',
      image: require('../assets/img/swatches/2880x1800-asparagus-solid-color-background.jpg'),
    },
    {
      value: '#78C5ED',
      lable: ' Sky Blue',
      image: require('../assets/img/swatches/2880x1800-baby-blue-solid-color-background.jpg'),
    },
    {
      value: '#FC7A9E',
      lable: ' Pink',
      image: require('../assets/img/swatches/2880x1800-baker-miller-pink-solid-color-background.jpg'),
    },
    {
      value: '#234482',
      lable: ' Bdazzled Blue',
      image: require('../assets/img/swatches/2880x1800-bdazzled-blue-solid-color-background.jpg'),
    },
    {
      value: '#4E8D8F',
      lable: ' Teal',
      image: require('../assets/img/swatches/2880x1800-cadet-blue-solid-color-background.jpg'),
    },
    {
      value: '#956749',
      lable: ' Sand',
      image: require('../assets/img/swatches/2880x1800-cafe-au-lait-solid-color-background.jpg'),
    },
    {
      value: '#DC5966',
      lable: ' Candy Pink',
      image: require('../assets/img/swatches/2880x1800-candy-pink-solid-color-background.jpg'),
    },
    {
      value: '#0C6593',
      lable: ' CG Blue',
      image: require('../assets/img/swatches/2880x1800-cg-blue-solid-color-background.jpg'),
    },
    {
      value: '#D2568F',
      lable: ' Hot Pink',
      image: require('../assets/img/swatches/2880x1800-china-pink-solid-color-background.jpg'),
    },
    {
      value: '#943C5B',
      lable: ' Soft Pink',
      image: require('../assets/img/swatches/2880x1800-china-rose-solid-color-background.jpg'),
    },
    {
      value: '#5E3B83',
      lable: ' Light Purple',
      image: require('../assets/img/swatches/2880x1800-dark-lavender-solid-color-background.jpg'),
    },
  ];

export default class SettingsModule extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          itemCost: '5',
          isFocus: false,
          colorValue: '',
          audioEnabled: true,
          isLoading: false
      }
  }

  save = (item) => {
    this.setState({ isLoading: true })
    axios.post(`${this.state.apiEndpoint}/saveSettings`, {
      itemCost: this.state.itemCost,
      themeColor: this.state.colorValue
    })
      .then(response => {
        if (!response.data.success) {
          Toast.show(response.data.message, {
            duration: Toast.durations.LONG,
            backgroundColor: theme.complimentary
          })
        } else {
          Toast.show(response.data.message, {
            duration: Toast.durations.LONG,
            backgroundColor: theme.success,
            onShown: () => {
              AsyncStorage.setItem('user', JSON.stringify(response.data.user))
              this.props.navigation.navigate('Dashboard')
            },
          })
        }
        this.setState({ isLoading: false })
    })
      .catch(error => {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: theme.complimentary
      });
      this.setState({ isLoading: false })
    });
  }

  render() {
    return (
      // Theme- changing the theme will change the main color scheme
      <View style={{...settingsStyles.dataTableWrap, ...baseStyles.pv1}}>
        <View style={{ ...settingsStyles.dataTable }}>
            <View style={{...baseStyles.pv2, ...settingsStyles.dataTableRow}}>
                <Text style={settingsStyles.settingLabel}>Theme</Text>
                <SelectCountry
                    style={settingsStyles.dropdown}
                    selectedTextStyle={settingsStyles.selectedTextStyle}
                    placeholderStyle={settingsStyles.placeholderStyle}
                    imageStyle={settingsStyles.imageStyle}
                    inputSearchStyle={settingsStyles.inputSearchStyle}
                    iconStyle={settingsStyles.iconStyle}
                    maxHeight={300}
                    value={this.state.colorValue}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    imageField="image"
                    placeholder="Select color"
                    searchPlaceholder="Search..."
                    onChange={e => {
                      this.setState({colorValue: e.value})
                    }}
                />
            </View>
        </View>
        <View style={{ ...settingsStyles.dataTable }}>
          <View style={{...baseStyles.pv2, ...settingsStyles.dataTableRow}}>
            <Text style={settingsStyles.settingLabel}>Item Cost</Text>
            <TextInput
            style={settingsStyles.input}
            placeholder="Item Cost"
            placeholderTextColor="#555"
            autoCapitalize="none"
            onChangeText={(itemCost) => this.setState({itemCost: itemCost.replace(/[^0-9.]/g, '')})}
            value={this.state.itemCost}
          />
          </View>
        </View>
        <View style={[settingsStyles.dataTable]}>
            <View style={{...baseStyles.pv2, ...settingsStyles.dataTableRow}}>
                <Text style={settingsStyles.settingLabel}>Audio</Text>
                <Switch
                    trackColor={{false: '#767577', true: theme.successLight}}
                    thumbColor={'#f5dd4b'}
                    ios_backgroundColor={theme.error}
                    onValueChange={() => {this.setState({audioEnabled: !this.state.audioEnabled})}}
                    style={settingsStyles.switch}
                    value={this.state.audioEnabled}
                />
            </View>
        </View>
        <TouchableOpacity onPress={this.save} style={{...settingsStyles.saveButton}}>
           <Text style={{...settingsStyles.scanButtonText, ...baseStyles.text2, ...baseStyles.mr2}}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}