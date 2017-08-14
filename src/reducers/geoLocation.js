import {LOCATE, ERROR_LOCATING} from '../types';

const initialSate = {
  latitude: null,
  longitude: null,
  error: null
}
export const geoLocationReducer = (location = initialSate, action) => {
  switch(action.type){
   case LOCATE:
   console.log(action, 'action!!!!!!!!')
    return {...location, latitude:  action.latitude, longitude: action.longitude}
    case ERROR_LOCATING:
     return {...location, error: action.error.message}
  }
  return location;
}
