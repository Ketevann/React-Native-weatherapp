import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { getSavedLocations } from '../actions'
import List from './List'


class SavedLocations extends Component {
  componentWillMount() {
    this.props.getSavedLocations()
    this.createDataSource(this.props)

  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ weather }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(weather);
  }
  // renderRow (employee) {
  //   return <ListItem employee={employee} />
  // }
  rowData(weather) {
    return (<List currentWeather={weather} />)

  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ListView
          style={{ flex: 1, height: 100 }}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.rowData}
          automaticallyAdjustContentInsets={true}

        />

      </View>
    )
  }
}

export default connect(({ weather }) => ({ weather: weather }),
  { getSavedLocations })(SavedLocations)
