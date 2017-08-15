import {GET_WEATHER, SAVE_LOCATION} from '../types'

const INITIAL_STATE = {
  location: []
}

export const weatherReducer = (weather = INITIAL_STATE, action) =>{
  switch(action.type){
    case SAVE_LOCATION:
   // console.log(action, "ACT", action.favs[0])
      return {...weather, location:[...weather.location, action.favs]}
  }

  return INITIAL_STATE
}
