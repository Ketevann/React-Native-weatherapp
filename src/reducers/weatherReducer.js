import {GET_WEATHER,
  SAVE_LOCATION,
  FETCH_LOCATIONS
} from '../types'

const INITIAL_STATE = {
  location: []
}

export const weatherReducer = (weather = INITIAL_STATE, action) =>{
  switch(action.type){
    case SAVE_LOCATION:
    console.log(action, "ACT", action.favs)
      return {...weather, location:[...weather.location, action.favs]}
       case FETCH_LOCATIONS:
    console.log(action, "ACT", action, typeof action.favs)
      return action.favs
  }

  return INITIAL_STATE
}
