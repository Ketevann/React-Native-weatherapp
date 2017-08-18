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
  dispatch =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${location},us\&appid\=${API_KEY}`)
      .then(res => {
        const {data} = res
        dispatch({ type: GET_WEATHER, data })
      })
      .then(()=> {
      Actions.displayweather()

      })

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
      .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        if (favs.lastIndexOf(text) === -1) {
        favs.push(text)
        dispatch({ type: SAVE_LOCATION, favs })
        return AsyncStorage.setItem('location', JSON.stringify(favs))
        .then(() => {
        // AsyncStorage.removeItem('location')
         Actions.displaySearchedWeather()
         })
      }
      else {
        Actions.saved()}
      })
  })




// export const getSavedLocations = () =>
//   dispatch =>
//     AsyncStorage
//       .getItem('location')
//       .then(favs => {
//         favs = favs == null ? [] : JSON.parse(favs)
//         var cityArr = []
//         favs.forEach(city =>{
//          cityArr.push(axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${city},us\&appid\=${API_KEY}`))
//         })
//         axios.all(cityArr)
//         .then(favs =>{
//           console.log(favs, 'favs!!!!!!!!!!!!!!')
//           dispatch({ type:FETCH_LOCATIONS, favs })
//         })
//       })

export const getSavedLocations = () =>
  dispatch =>
    AsyncStorage
      .getItem('location')
      .then(favs => {
      favs = favs == null ? [] : JSON.parse(favs)

          dispatch({ type: FETCH_LOCATIONS, favs })

      })


export const deleteLocations = (element) =>
  dispatch => {
    const arr = [1]
    AsyncStorage
      .getItem('location')
      .then(favs => {
        const index = JSON.parse(favs).indexOf(element)
        var temp = JSON.parse(favs).slice(0)
        temp.splice(index, 1)
        favs = temp.slice(0)
        dispatch({ type: FETCH_LOCATIONS, favs })
        AsyncStorage.setItem('location', JSON.stringify(favs))

      })
  }
