import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayWeather from './DisplayWeather';


class SavedLocationWeather extends Component {
  // console.log(props, 'props')



  render() {
    if (!this.props.temp) return null
     const {selectedLocation} = this.props.temp


    return (
      <DisplayWeather name={selectedLocation.name} currentTemp={selectedLocation.main.temp} temp_max={selectedLocation.main.temp_max} temp_min={selectedLocation.main.temp_min}
      description={selectedLocation.weather[0].description}
       />
    );
  };
}



export default connect(({ temp }) => ({ temp: temp }), null)(SavedLocationWeather)
