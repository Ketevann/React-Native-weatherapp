import {GET_WEATHER,
  SAVE_LOCATION,
  FETCH_LOCATIONS
} from '../types'

const INITIAL_STATE = {
  selectedLocation: {},

}

export const temp = (weather = INITIAL_STATE, action) =>{
  switch(action.type){
   case GET_WEATHER:
        return {...weather, selectedLocation: action.data}
  }

  return weather

}
