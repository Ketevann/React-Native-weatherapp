import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Button extends Component {

  render(){
    {console.log('props', this.props, this.props.onPress)}
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
