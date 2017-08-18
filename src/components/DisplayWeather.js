import { View, Text, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Button } from './Button';
import Footer from './Footer'
import { connect } from 'react-redux';
import { pickImage } from '../pickImage'
var Dimensions = require('Dimensions')
var { width, height } = Dimensions.get('window')

const colors = ['#ffb5f7', '#55dded', '#50b6e5', '#19b6ff', '#b5ffa8', '#ff5e5e', '#ff905e', '#ffd84f', '#9fe22b', '#e22a2e']
var item = colors[Math.floor(Math.random() * colors.length)];


class DisplayWeather extends Component {
  state = {
    cel: true,
    far: false,
    celColor: 'white',
    farColor: 'black'

  }

  onCelTempPress() {
    this.setState({ far: false, cel: true, celColor: 'white', farColor: 'black' })
  }

  onFarTempPress() {
    this.setState({ far: true, cel: false, celColor: 'black', farColor: 'white' })
  }

  renderTemp(K) {
    if (this.state.far) {
      const Far = ((9 / 5) * (K - 273) + 32).toFixed(0)
      return (<Text>{Far}</Text>)
    }
    else {
      const Cel = (K - 273).toFixed(0)
      return (<Text>{Cel}</Text>)
    }
  }

  renderImage(image) {
    switch (this.props.description) {
      case 'haze':
        return pickImage.haze
      case 'clear sky':
        return pickImage['clear sky']
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return pickImage['few clouds']
      case 'shower rain':
      case 'rain':
      case "light rain":
        return pickImage.rain
      case 'thunderstorm':
        return pickImage.thunderstorm
      case 'snow':
        return pickImage.snow
      case 'mist':
        return pickImage.mist
      default:
        return pickImage.haze
    }
  }


  render() {

    if (!this.props.temp) return null
    const { selectedLocation } = this.props.temp,
     { textStyle, viewStyle,
      buttonTextStyle, ScrollViewStyle,
      viewTextStyle,
       imageDegreeStyle,
      placeNameStyle,
      weatherImageStyle } = styles
    var image = {}
    image = this.renderImage(image)
    return (
      <ScrollView style={ScrollViewStyle}>
        <Text style={placeNameStyle}>{this.props.name}</Text>
        <Image
          style={weatherImageStyle}
          source={image.uri} />
        <Text
          style={{ marginTop: 10, fontSize: 22, alignSelf: 'center' }}
        > {(this.props.description)}</Text>
        <View style={viewTextStyle}>
          <Text
            style={textStyle}
          >{this.renderTemp(this.props.currentTemp)}</Text>
          <Image
            style={imageDegreeStyle}
            source={require('../img/degree.png')} />
        </View>
        <Text
          style={{ fontSize: 22, alignSelf: 'center' }}
        >Max: {this.renderTemp(this.props.temp_max)} Min: {this.renderTemp(this.props.temp_min)}</Text>
        <View style={viewTextStyle} >
          <Button onPress={this.onCelTempPress.bind(this)}
            style={{
              fontSize: 40,
              padding: 10,
              color: this.state.celColor
            }}>
            C
      </Button>
          <Text style={buttonTextStyle}>/</Text>
          <Button onPress={this.onFarTempPress.bind(this)}
            style={{
              fontSize: 40,
              padding: 10,
              color: this.state.farColor
            }}>
            F
      </Button>
        </View>
        <View style={{ marginTop: height - 490}}>
          <Footer />
        </View>
      </ScrollView>
    );
  };
}

const styles = {
  ScrollViewStyle: {
    backgroundColor: item,
    marginTop: -10,
    flex: .8

  },
  textStyle: {
    fontSize: 40,
    alignSelf: 'center',
    paddingTop: 10
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 40,
    padding: 10

  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 },
  imageStyle: {
    height: 300,
    width: 300
  },

  imageDegreeStyle: {
    width: 10,
    height: 10, alignSelf: 'center',
    marginTop: 27,
    position: 'relative',
    bottom: 22
  },
  placeNameStyle: {
    fontSize: 50,
    alignSelf: 'center',
    marginTop: 18
  },
  weatherImageStyle: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 30
  }

}

export default connect(({ temp }) => ({ temp: temp }), null)(DisplayWeather)
