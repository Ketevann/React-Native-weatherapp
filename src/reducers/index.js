import {combineReducers} from 'redux';
import {geoLocationReducer} from './geoLocation';
import {weatherReducer} from './weatherReducer'
import {temp} from './temp'


export default combineReducers({
  geoLocation: geoLocationReducer,
  weather: weatherReducer,
 temp: temp
});
