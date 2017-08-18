import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Button } from './Button';
import  Footer  from './Footer'
import { getLocation } from '../actions'
import { connect } from 'react-redux';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';
import DisplayWeather from './DisplayWeather';
const tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5'];
const tableData = [
  ['1', '2', '3', '4'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
];

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
        {console.log(this.props,' savesweather props!********')}

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



export default connect(({ temp }) => ({ temp: temp }), { getLocation })(SavedLocationWeather)
