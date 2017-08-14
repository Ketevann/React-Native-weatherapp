import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { Button } from './Button';


class Weather extends Component {
  // console.log(props, 'props')

  state = {
    cel: true,
    far: false,
    celColor: 'blue',
    farColor: 'black'

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
  render() {

    const { textStyle, viewStyle, buttonTextStyle } = styles
    const {temp} = this.props.temp
    return (
      <View
        style={viewStyle}
      >
        <Text style={{ fontSize: 40, alignSelf: 'center', paddingTop: 10 }}>Location</Text>
        <Text
          style={textStyle}
        >{this.renderTemp(temp)}</Text>
        <Text
          style={{ fontSize: 22, alignSelf: 'center' }}
        >Max: 10 Min: 20</Text>

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




      </View>
    );
  };
}

const styles = {
  viewStyle: {
    backgroundColor: '#a04fcc',
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

  }
}
export { Weather }
