import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import DisplayWeather from './DisplayWeather'
import {connect} from 'react-redux'
import {getLocation} from '../actions'

class Weather extends Component {
  // console.log(props, 'props')



 componentWillMount(){
  this.props.getLocation();

  }


render() {
  return(
    <View>
    {this.props.geoLocation.current === '' ? <Text>789</Text> :
    <Text>123</Text> }
    </View>
  );
};
}




export default connect(({geoLocation}) => ({geoLocation: geoLocation}), {getLocation})(Weather)
