import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import  Footer  from './Footer'
import { getLocation } from '../actions'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DisplayWeather from './DisplayWeather';

class GeoLocation extends Component {

 componentWillMount() {
    this.props.getLocation();

  }
  render() {
    if (!this.props.geoLocation.current.main) return null
    const { textStyle, viewStyle, buttonTextStyle } = styles
    const { name } = this.props.geoLocation.current
    const {description} = this.props.geoLocation.current.weather[0]
      const { temp_min, temp_max, temp } = this.props.geoLocation.current.main

    {console.log(this.props, ' wather props', this.props.geoLocation.current.main,  temp_min)}
    return (
      <View style={viewStyle}>
      <DisplayWeather name={name} currentTemp={temp} temp_min={temp_min} temp_max={temp_max}
      description={description}
       />
      </View>
    );
  };
}

const styles = {
  viewStyle: {
    backgroundColor: 'orange',
    flex: 1


  },
  textStyle: {
    fontSize: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 200
  },
  buttonTextStyle: {
    fontSize: 40,
    padding: 10

  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
}

export default connect(({ geoLocation }) => ({ geoLocation: geoLocation }), { getLocation })(GeoLocation)
