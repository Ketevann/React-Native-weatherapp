import {LOCATE, ERROR_LOCATING} from '../types';
import API_KEY from '../../secrets';
import axios from 'axios';


export const getLocation = () =>
  dispatch =>
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const {latitude} = position.coords;
      const {longitude} =  position.coords
        axios.get(`https://api.openweathermap.org/data/2.5/weather\?lat\=${latitude}\&lon\=${longitude}\&appid\=${API_KEY }`)
        .then((pos) => {
        const {data} = pos;
      dispatch({type: LOCATE, data})
        })
       },
    (error) => {
      dispatch({type: ERROR_LOCATING, error})},
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );

