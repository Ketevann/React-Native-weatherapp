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
    console.log(action, "ACTION!!!!", action.favs, weather.location)
      return {...weather, location:action.favs}
       case FETCH_LOCATIONS:
    console.log(action, "ACT***********", action, typeof action.res)
      return action.res
  }

  return weather
}
