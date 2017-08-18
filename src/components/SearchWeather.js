
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { Button } from './Button'
//import { saveWeather } from '../actions/weatherActions';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { saveWeather, getLocation } from '../actions'

var SearchBar = require('react-native-search-bar');
var { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');

class SearchWeather extends Component {

  // componentDidMount() {
  //   console.log('axiiiiooos')
  //   axios.get('https://api.openweathermap.org/data/2.5/weather\?q\=London,uk\&appid\=edeb9d88dfd1310c9f8688589c73915b')
  //     .then(res => { console.log(res.data, 'tesss') })
  //     .catch(err => console.log(err))
  // }
  componentDidMount() {
    this.refs.searchBar.focus();
  }

  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder'
    }
  }

  onSearch(text) {
    this.props.saveWeather(text)

  }

  render() {
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
