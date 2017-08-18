import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Button } from './Button';
import  Footer  from './Footer'
import { getLocation } from '../actions'
import { connect } from 'react-redux';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';
import DisplayWeather from './DisplayWeather';


class SavedLocationWeather extends Component {
  // console.log(props, 'props')

  state = {
    cel: true,
    far: false,
    celColor: 'blue',
    farColor: 'black'

  }

  componentWillMount() {
   // this.props.getLocation();

  }



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
