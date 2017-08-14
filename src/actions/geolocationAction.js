import {LOCATE, ERROR_LOCATING} from '../types'



export const getLocation = () =>
  dispatch =>


  navigator.geolocation.getCurrentPosition(
    (position) => {
      const {latitude} = position.coords;
      const {longitude} =  position.coords
      console.log(position, 'position!!!')
      dispatch({type: LOCATE, latitude, longitude})
      // this.setState({
      //   latitude: position.coords.latitude,
      //   longitude: position.coords.longitude,
      //   error: null,
      // });
    },
    (error) => {
      console.log(error, 'error')
      dispatch({type: ERROR_LOCATING, error})},
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );

