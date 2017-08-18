import React, { Component } from 'react';
import cloudy from './img/cloudy.png'
import { View, Text, ScrollView, Image } from 'react-native';



const pickImage = {
  'clear sky': {
    imgName: 'clear sky',
    uri: require('./img/sunny.png')
  }
  ,
  'few clouds': {
    imgName: 'few cloudst',
    uri: require('./img/cloudy.png')
  },
  'rain': {
    imgName: 'rain',
    uri: require('./img/rainy.png')
  },
  snow: {
    imgName: 'Cat on a Boat',
 uri: require('./img/snowy.png')
  },
  'mist': {
    imgName: 'clear sky',
    uri: require('./img/mist.png')
  },
  thunderstorm: {
    imgName: 'thunderstorm',
    uri: require('./img/thunder.png')
   },
   haze: {
    imgName: 'thunderstorm',
    uri: require('./img/haze.png')
   }
  //,
  // 'clear sky': {
  //   imgName: 'clear sky',
  //   uri: require('../img/cloudy.png')
  // },
  // cat: {
  //   imgName: 'Cat on a Boat',
  //   uri: require('path/to/local/image')
  // }
}

// // const pickImage = (weather) => {
// //   console.log('weather in pickiamge', weather)
// //   switch (weather) {
// //     case 'clear sky':
// //       return {source:require('../img/cloudy.png')} ;
// //     case 'few clouds':
// //     case 'scattered clouds':
// //     case 'broken clouds':
// //   return


// //         {source:require('../img/cloudy.png')}



// //     case 'shower rain':
// //     case 'rain':
// //       return  {source:require('../img/rainy.png')}
// //     case 'thunderstorm':
// //       return {source:require('../img/thunder.png')}
// //     case 'snow':
// //       return {source:require('../img/snowy.png')}
// //     case 'mist':
// //       return  {source:require('../img/mist.png')}
// //     default:
// //       return {source:require('../img/cloudy.png')}
// //   }


 export {pickImage}
