import {LOCATE, ERROR_LOCATING} from '../types';

const initialSate = {
  current: ''
}
export const geoLocationReducer = (location = initialSate, action) => {
  switch(action.type){
   case LOCATE:
    return {current:action.data}
    case ERROR_LOCATING:
     return {...location, error: action.error.message}
  }
  return location;
}
