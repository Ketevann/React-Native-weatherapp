import {
  GET_WEATHER,
  SAVE_LOCATION,
  FETCH_LOCATIONS,
} from '../types';
import firebase from 'firebase';
import API_KEY from '../../secrets'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native'

export const getWeather = (location) =>
  dispatch =>{
    console.log(location, 'LOCATION')
    axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${location},us\&appid\=${API_KEY}`)
      .then(res => {
        console.log('res', res)
        const {data} = res
        dispatch({ type: GET_WEATHER, data })
      })
      .then(()=> {
      Actions.displayweather()

      })
  }
export const saveWeather = (text) =>
  dispatch =>
      axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${text},us\&appid\=${API_KEY}`)
       .then(res => {
         const {data} = res
           dispatch({type: GET_WEATHER, data })
       })
       .then(() => {




   AsyncStorage
      .getItem('location')
      .then(places => {
        places = places == null ? [] : JSON.parse(places)
        if (places.lastIndexOf(text) === -1) {
        places.push(text)
        dispatch({ type: SAVE_LOCATION, places })
        return AsyncStorage.setItem('location', JSON.stringify(places))
        .then(() => {
        // AsyncStorage.removeItem('location')
         Actions.displaySearchedWeather()
         })
      }
      else {
        Actions.saved()}
      })
  })






export const getSavedLocations = () =>
  dispatch =>
    AsyncStorage
      .getItem('location')
      .then(places => {
      places = places == null ? [] : JSON.parse(places)

          dispatch({ type: FETCH_LOCATIONS, places })

      })


export const deleteLocations = (element) =>
  dispatch => {
    const arr = [1]
    AsyncStorage
      .getItem('location')
      .then(places => {
        const index = JSON.parse(places).indexOf(element)
        var temp = JSON.parse(places).slice(0)
        temp.splice(index, 1)
        places = temp.slice(0)
        dispatch({ type: FETCH_LOCATIONS, places })
        AsyncStorage.setItem('location', JSON.stringify(places))

      })
  }
