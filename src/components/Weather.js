import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Button } from './Button';
import { Footer } from './Footer'
import { getLocation } from '../actions'
import { connect } from 'react-redux';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';

const tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5'];
const tableData = [
  ['1', '2', '3', '4'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
];

class DisplayWeather extends Component {
  // console.log(props, 'props')

  state = {
    cel: true,
    far: false,
    celColor: 'blue',
    farColor: 'black'

  }

  // componentWillMount() {
  //   this.props.getLocation();

  // }
  onCelTempPress() {
    this.setState({ far: false, cel: true, celColor: 'white', farColor: 'black' })
  }

  onFarTempPress() {
    this.setState({ far: true, cel: false, celColor: 'black', farColor: 'white' })
  }

  renderTemp(K) {
    if (this.state.far) {
      const Far = ((9 / 5) * (K - 273) + 32).toFixed(0)
      return (<Text>{Far}</Text>)
    }
    else {
      const Cel = (K - 273).toFixed(0)
      return (<Text>{Cel}</Text>)
    }
  }


  // const ds = new ListView.DataSource({
  //   rowHasChanged: (r1, r2) => r1 !== r2
  // });
  //    this.dataSource = ds.cloneWithRows(employees);

  render() {
    if (this.props.current = '') return null
    const { textStyle, viewStyle, buttonTextStyle } = styles
    const { temp_min, temp_max, name } = this.props.geoLocation.current
    if (this.props.geoLocation.current.main) {
      const { temp_min, temp_max, temp } = this.props.geoLocation.current.main
    }

    return (
      <ScrollView>
     <Footer />
      </ScrollView>
    );
  };
}

const styles = {
  viewStyle: {
    backgroundColor: 'orange',
    flex: 1
  },
  textStyle: {
    fontSize: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 200
  },
  buttonTextStyle: {
    fontSize: 40,
    padding: 10

  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
}

export default connect(({ geoLocation }) => ({ geoLocation: geoLocation }), { getLocation })(DisplayWeather)
