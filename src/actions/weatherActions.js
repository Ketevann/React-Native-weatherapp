import {GET_WEATHER} from '../types';
import firebase from 'firebase';
import API_KEY from '../../secrets'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

console.log(API_KEY, "APIKEY")
// https://samples.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }
// https://api.openweathermap.org/data/2.5/weather\?q\=${text}\&appid\=${API_KEY }
//openweathermap.org/data/2.5/forecast?q=London,us
export const saveWeather = (text) =>
  dispatch =>
     axios.get(`https://api.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }`)
      .then(res => {
         console.log(res.data, 'onPress!!!!', res.data.name)
    //     const {name} = res.data
    //     console.log({name}, 'place')
    //    return firebase.database().ref(`/locations`)
    // .push({ name })
    //   })
    // .then(() =>{
    //   console.log('pusheeed')
    // })
        //const temp = (res.data.main.temp - 273.15).toFixed(0)
        var temp
        Actions.weather(temp)
      })
      .catch(err => console.log(err))


