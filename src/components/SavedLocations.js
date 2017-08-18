import React, {Component} from 'react';
import {View, Text, ListView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getSavedLocations} from '../actions'
import List  from './List'


class SavedLocations extends Component {
  componentWillMount(){
    this.props.getSavedLocations()
   // this.createDataSource(this.props)

  }

componentWillReceiveProps(nextProps){
  // this.createDataSource(nextProps)
  }

  createDataSource({weather}){
    //  const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    //  this.dataSource = ds.cloneWithRows(weather);
  }
  // renderRow (employee) {
  //   return <ListItem employee={employee} />
  // }
  // rowData(weather){
  //   console.log('pro!!!!!!!!!!!!!p', weather)
  //  return( <List currentweather={weather} />)

  // }
  render(){

    {console.log(this.props, 'props')}
    const {weather} = this.props
    return(
     <View style={{flex: 1,backgroundColor:'white'}}>

 <ScrollView>
  {weather && weather.map(elem => {
  return( <List
   currentweather={elem.data.name}
    degrees={(elem.data.main.temp - 273.15).toFixed(0)} />)
  })
}
 </ScrollView>

       </View>
    )
  }
}

export default connect(({weather}) => ({weather: weather}),
{getSavedLocations})(SavedLocations)
