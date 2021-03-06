import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { deleteLocations, getWeather } from '../actions'
const prop = 's'
import { Button } from './Button'
import { Actions } from 'react-native-router-flux';

class List extends Component {

  onPress() {
    const { currentWeather } = this.props
    this.props.getWeather(currentWeather)
  }

  render() {

    var swipeoutBtns = [
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          this.props.deleteLocations(this.props.weather)
        }
      }
    ]
    const { ListTextStyle } = styles
    return (

      <View style={{ flex: 1 }}>
        <Swipeout

          style={{ backgroundColor: 'white' }}
          right={swipeoutBtns}>
          <View>

            <Text
              onPress={this.onPress.bind(this)}
              style={ListTextStyle}
            >
              {this.props.currentWeather
              }
            </Text>
          </View>
        </Swipeout>
      </View>



    )
  }
}
const styles = {
  ListTextStyle: {
    padding: 15,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 4,
    margin: 10

  }
}

export default connect(null,
  {
    deleteLocations,
    getWeather
  })(List)






