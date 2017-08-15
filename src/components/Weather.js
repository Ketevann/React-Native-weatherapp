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

  componentWillMount() {
    this.props.getLocation();

  }
  onCelTempPress() {
    this.setState({ far: false, cel: true, celColor: 'white', farColor: 'black' })
  }

  onFarTempPress() {
    this.setState({ far: true, cel: false, celColor: 'black', farColor: 'white' })
  }

  renderTemp(K) {
    if (this.state.cel) {
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
    { console.log(this.props, ' weather props', this.props.geoLocation.current.main) }
    if (this.props.current = '') return null
    const { textStyle, viewStyle, buttonTextStyle } = styles
    const { temp_min, temp_max, name } = this.props.geoLocation.current
    if (this.props.geoLocation.current.main) {
      const { temp_min, temp_max, temp } = this.props.geoLocation.current.main
    }

    return (
      <ScrollView>
        {this.props.geoLocation.current === '' ? null :
          <ScrollView
            style={viewStyle}
          >


            <Text style={{ fontSize: 40, alignSelf: 'center', paddingTop: 10 }}>{name}</Text>

            <Text
              style={textStyle}
            >{this.renderTemp(this.props.geoLocation.current.main.temp)}</Text>
            <Text
              style={{ fontSize: 22, alignSelf: 'center' }}
            >Max: {this.props.geoLocation.current.main.temp_min} Min: {this.props.geoLocation.current.main.temp_max}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
              <Button onPress={this.onCelTempPress.bind(this)}
                style={{
                  fontSize: 40,
                  padding: 10, color: this.state.celColor
                }}>
                C
      </Button>

              <Text style={buttonTextStyle}>/</Text>
              <Button onPress={this.onFarTempPress.bind(this)}
                style={{
                  fontSize: 40,
                  padding: 10, color: this.state.farColor
                }}>
                F
      </Button>
            </View>

            <View>
              <Table>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData} style={styles.row} textStyle={styles.text} />
              </Table>
            </View>
            <Footer />

          </ScrollView>
        }
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
