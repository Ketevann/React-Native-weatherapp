import {
  GET_WEATHER,
  SAVE_LOCATION,
  FETCH_LOCATIONS
} from '../types';
import firebase from 'firebase';
import API_KEY from '../../secrets'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native'
console.log(API_KEY, "APIKEY")

// https://samples.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }
// https://api.openweathermap.org/data/2.5/weather\?q\=${text}\&appid\=${API_KEY }
//openweathermap.org/data/2.5/forecast?q=London,us
export const saveWeather = (text) =>
  dispatch => {
    //  axios.get(`https://api.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }`)
    //   .then(res => {



    AsyncStorage
      .getItem('location')
      .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)

        favs.push(text)
        // for (var i = 0; i< favs.length; i++)

         dispatch({type: SAVE_LOCATION, favs})
        return AsyncStorage.setItem('location', JSON.stringify(favs))
        // AsyncStorage.removeItem('location')
      })




    //this.setState({ 'name': value });
    var temp
    Actions.weather(temp)
    // })
    // .catch(err => console.log(err))

  }
// export const getLocation = () =>{
//   AsyncStorage.getItem('name').then((value) ⇒ this.setState({ 'name': value }))
// }



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
        //var temp = JSON.parse(favs).slice(0)
        //temp.splice(index, 1)
        const temp = 1
        // JSON.parse(favs).splice(index, 1)
        //favs = JSON.stringify(temp)

        //return AsyncStorage.setItem('location', JSON.stringify(favs))

        const arr = JSON.parse(favs)
        //     .then((arr)=>
        // dispatch({type: FETCH_LOCATIONS, arr}))
      })
  }
