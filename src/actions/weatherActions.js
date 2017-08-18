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
console.log(API_KEY, "APIKEY")

// https://samples.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }
// https://api.openweathermap.org/data/2.5/weather\?q\=${text}\&appid\=${API_KEY }
//openweathermap.org/data/2.5/forecast?q=London,us

export const getWeather = (location) =>
  dispatch =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${location},us\&appid\=${API_KEY}`)
      .then(res => {
        const {data} = res
        console.log(location, 'LOCATION!!!')
        dispatch({ type: GET_WEATHER, data })
      })
      .then(()=> {
      Actions.displayweather()

      })

export const saveWeather = (text) =>
  dispatch =>
      axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${text},us\&appid\=${API_KEY}`)
       .then(res => {
        console.log(res.data)
         const {data} = res
          console.log('REEEEES', data)
           dispatch({type: GET_WEATHER, data })
       })
       .then(() => {


    //      console.log(res.data, 'onPress!!!!', res.data.name)
    //     const {name} = res.data
    //     console.log({name}, 'place')
    //    return firebase.database().ref(`/locations`)
    // .push({ name })
    //   })
    // .then(() =>{
    //   console.log('pusheeed')    // })

   AsyncStorage
      .getItem('location')
      .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        console.log('text', text, 'in save weather')
        if (favs.lastIndexOf(text) === -1) {
        favs.push(text)
         console.log("whatever")
        dispatch({ type: SAVE_LOCATION, favs })
        return AsyncStorage.setItem('location', JSON.stringify(favs))
        .then(() => {


        // AsyncStorage.removeItem('location')
        console.log("whatever")
         Actions.displaySearchedWeather()
         })
      }
      else {
        console.log('action Saved!!!')
        Actions.saved()}
      })


    // location, JSON.parse(location.slice(0,15)).concat(location.slice(15)),
    //console.log(typeof location, location,  'loci!!!!!!!!!!!!!!')
    // var location = AsyncStorage.getItem('location');
    // console.log('locoloco', location, typeof location)
    // //location = JSON.parse(location);
    // location.push(text);

    // AsyncStorage.setItem('location', JSON.stringify(location));
    // console.log('locoloco22222', location, typeof location)



    //this.setState({ 'name': value });
   // var temp

    // })
    // .catch(err => console.log(err))

  })

// export const getLocation = () =>{
//   AsyncStorage.getItem('name').then((value) ⇒ this.setState({ 'name': value }))
// }



export const getSavedLocations = () =>
  dispatch =>
    AsyncStorage
      .getItem('location')
      .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        console.log('in SavedLocation , ', favs)
        var cityArr = [], art = [{}]

        favs.forEach(city =>{
         cityArr.push(axios.get(`https://api.openweathermap.org/data/2.5/weather\?q\=${city},us\&appid\=${API_KEY}`))
        })
        axios.all(cityArr)
        .then(res =>{
          console.log(res, 'res data in promise all', cityArr)
          dispatch({ type: FETCH_LOCATIONS, res })
        })
        // const arr = JSON.parse(favs)


      })

export const deleteLocations = (element) =>
  dispatch => {
    console.log('getting here')
    const arr = [1]
    AsyncStorage
      .getItem('location')
      .then(favs => {
        console.log(favs, 'FAVVV')
        const index = JSON.parse(favs).indexOf(element)
        console.log('index', index, Array.isArray(favs), JSON.parse(favs))
        var temp = JSON.parse(favs).slice(0)
        //temp.splice(index, 1)
        // const temp = 1
        console.log(temp, 'temp')
        temp.splice(index, 1)
        //favs = JSON.stringify(temp)
        console.log(favs, 'FAVVV', temp)


        favs = temp.slice(0)
        // const arr = JSON.parse(favs)
        // .then((arr)=>
        dispatch({ type: FETCH_LOCATIONS, favs })
        AsyncStorage.setItem('location', JSON.stringify(favs))
        //)
      })
  }
