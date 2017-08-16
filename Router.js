import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Weather from './src/components/Weather'
import SearchWeather from './src/components/SearchWeather'
import SavedLocations from './src/components/SavedLocations'

import {View} from 'react-native';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="main">
        <Scene
        key="search"
        component={SearchWeather}
        title="Search"

         />
      <Scene key="weather" component={Weather} title="Today's weather"  initial/>
      <Scene key="saved" component={SavedLocations} title="Saved Locations" />

     </Scene>

     </Router>

  )
};

export default RouterComponent;
