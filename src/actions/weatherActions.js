import {GET_WEATHER, SAVE_LOCATION} from '../types';
import firebase from 'firebase';
import API_KEY from '../../secrets'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'
console.log(API_KEY, "APIKEY")

// https://samples.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }
// https://api.openweathermap.org/data/2.5/weather\?q\=${text}\&appid\=${API_KEY }
//openweathermap.org/data/2.5/forecast?q=London,us
export const saveWeather = (text) =>
  dispatch => {
    //  axios.get(`https://api.openweathermap.org/data/2.5/forecast\?q\=London,us\&appid\=${API_KEY }`)
    //   .then(res => {
    //      console.log(res.data, 'onPress!!!!', res.data.name)
    //     const {name} = res.data
    //     console.log({name}, 'place')
    //    return firebase.database().ref(`/locations`)
    // .push({ name })
    //   })
    // .then(() =>{
    //   console.log('pusheeed')
    // })
        //const temp = (res.data.main.temp - 273.15).toFixed(0)

//         var countries = AsyncStorage.getItem('countries');
// AsyncStorage.setItem('countries', countries += JSON.stringify(text));

//       //  AsyncStorage.setItem('location', location+= JSON.stringify(country) );
// var location = AsyncStorage.getItem('location');
// location = JSON.parse(location);
// location.push(text);
// AsyncStorage.setItem('location', JSON.stringify(location));


//  var location = AsyncStorage.getItem('location')
//  .then(req => {
//    console.log(req, 'req')
//    dispatch({type: SAVE_LOCATION, req})
//  })
// console.log('lcocation!!!', location)
 //AsyncStorage.setItem('location', location += JSON.stringify(text));

 AsyncStorage
  .getItem('location')
  .then(favs => {
    //console.log('lcocation!!!', location, typeof favs, favs)
      favs = favs == null ? [] : JSON.parse(favs)

      favs.push(text)
      for (var i = 0; i< favs.length; i++)
       console.log(favs[i])
          console.log('lcocation!!!',  favs)
           dispatch({type: SAVE_LOCATION, favs})
      return AsyncStorage.setItem('location', JSON.stringify(favs))
  //     AsyncStorage.removeItem('location')
  // console.log(     AsyncStorage
  // .getItem('location')
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
        var temp
        Actions.weather(temp)
      // })
      // .catch(err => console.log(err))

  }
// export const getLocation = () =>{
//   AsyncStorage.getItem('name').then((value) ⇒ this.setState({ 'name': value }))
// }

