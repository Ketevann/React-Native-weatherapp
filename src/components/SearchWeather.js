/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { Button } from './Button'
import { Weather } from './Weather'
//import { saveWeather } from '../actions/weatherActions';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {saveWeather,getLocation} from '../actions'

var SearchBar = require('react-native-search-bar');

class SearchWeather extends Component {
  componentDidMount() {
    console.log('axiiiiooos')
    axios.get('https://api.openweathermap.org/data/2.5/weather\?q\=London,uk\&appid\=edeb9d88dfd1310c9f8688589c73915b')
      .then(res => { console.log(res.data, 'tesss') })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.refs.searchBar.focus();

  }
  componentWillMount(){
  this.props.getLocation();

  }
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder'
    }
  }


  // renderRow  (item, sectionId, index)  {
  //   return (
  //     <TouchableHightLight>


  //     </TouchableHightLight>
  //   );
  // }

  onSearch(text) {
    this.props.saveWeather(text)

    // axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${text}\&appid\=edeb9d88dfd1310c9f8688589c73915b`)
    //   .then(res => {
    //     console.log(res.data, 'onPress', this)
    //     const temp = (res.data.main.temp - 273.15).toFixed(0)
    //     Actions.weather({ temp })
    //   })
    //   .catch(err => console.log(err))

  }

  render() {
    {console.log("ths.r", this.props)}
    return (

        <View style={styles.SearchBarStyle}>
          <SearchBar
            ref='searchBar'
            placeholder='Search'
            onChangeText={(text) => this.setState({ text })}
            onSearchButtonPress={(text) => this.onSearch(text)}
            onCancelButtonPress={(text) => console.log(text)}

          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  TextInputStyle: {
    margin: 40,
    height: 60,

    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    //    marginTop: 100,
    padding: 15
  },
  SearchBarStyle: {
    marginTop: 100
  }

});

export default connect(null, { saveWeather, getLocation })(SearchWeather)
