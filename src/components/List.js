import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import {deleteLocations} from '../actions'
const prop= 's'


const List = (props) => {
  console.log(props, 'props')
  var swipeoutBtns = [
  {
    text: 'Delete',
    type: 'delete',
    onPress: () =>{
       props.deleteLocations(props.weather)
       console.log('yes', props)}
  }
]
  console.log('LIST PTOPS', props)
  const { ListTextStyle } = styles
  return (

    <View  style={{flex: 1}}>
    <Swipeout

    style={{backgroundColor: 'white'}}
     right={swipeoutBtns}>
      <View>
        <TouchableWithoutFeedback>

        <Text style={ListTextStyle}>{props.weather}</Text>
        </TouchableWithoutFeedback>
      </View>
    </Swipeout>
       </View>



  )
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

export default connect(null, {deleteLocations})(List)






