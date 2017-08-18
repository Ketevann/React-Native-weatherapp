import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayWeather from './DisplayWeather';


class SavedLocationWeather extends Component {

  state = {
    cel: true,
    far: false,
    celColor: 'blue',
    farColor: 'black'

  }

  render() {

    if (!this.props.temp) return null
     const {selectedLocation} = this.props.temp


    return (
      <View style={{flex:1}}>
      <DisplayWeather name={selectedLocation.name} currentTemp={selectedLocation.main.temp} temp_max={selectedLocation.main.temp_max} temp_min={selectedLocation.main.temp_min}
       description={selectedLocation.weather[0].description}
      />
      </View>
    );
  };
}



export default connect(({ temp }) => ({ temp: temp }), null)(SavedLocationWeather)
