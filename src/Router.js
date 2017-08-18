import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import GeoLocation from './components/GeoLocation'
import SavedLocationWeather from './components/SavedLocationWeather'
import SearchWeather from './components/SearchWeather'
import SavedLocations from './components/SavedLocations'
import SearchLocationWeather from './components/SearchLocationWeather'


import {View} from 'react-native';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="main">
        <Scene
        key="search"
        component={SearchWeather}
        title="Search"

         />
      <Scene key="current" component={GeoLocation} title="Today's weather"  initial/>
      <Scene key="displayweather" component={SavedLocationWeather} title="weather"  />
      <Scene key="saved" component={SavedLocations} title="Saved Locations" />
      <Scene key="displaySearchedWeather" component={SearchLocationWeather} title="Saved Locations" />


     </Scene>

     </Router>

  )
};

export default RouterComponent;
