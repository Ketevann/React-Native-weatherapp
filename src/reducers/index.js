import {combineReducers} from 'redux';
import {geoLocationReducer} from './geoLocation';
import {weatherReducer} from './weatherReducer'

export default combineReducers({
  geoLocation: geoLocationReducer,
  weather: weatherReducer

});
