import {GET_WEATHER,
  SAVE_LOCATION,
  FETCH_LOCATIONS
} from '../types'

const INITIAL_STATE = {
  location: [],

}

export const weatherReducer = (weather =[], action) =>{
  switch(action.type){
    case SAVE_LOCATION:
      return {...weather, location:action.places}
       case FETCH_LOCATIONS:
      return action.places
  }

  return weather
}
