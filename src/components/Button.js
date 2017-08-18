import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Button extends Component {

  render(){
    return(
    <View>
      <Text
      onPress={() => this.props.onPress()}
      style={this.props.style}>{this.props.children}</Text>
      </View>
    )
  }
}

export {Button}
