import React, {Component} from 'react';
import BottomToolbar from 'react-native-bottom-toolbar'
import {View} from 'react-native'
import { Actions } from 'react-native-router-flux';
import {getSavedLocations} from '../actions'
import {connect} from 'react-redux'
var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')


class Footer extends Component {
  render(){
    return(
<View style={{position: 'absolute',
bottom:0,
left:0,
width:width,
height:-10}}>
      <BottomToolbar >
          <BottomToolbar.Action
            title="Search"
            onPress={() =>

              Actions.search()
          }
          />
          <BottomToolbar.Action
            title="Saved"
            onPress={() =>
              Actions.saved()
             }
          />
          <BottomToolbar.Action
            title="Local"
            onPress={() =>
              Actions.current()
            }
          />
        </BottomToolbar>
        </View>
    )
  }
}

export default connect(null, {getSavedLocations})(Footer)
