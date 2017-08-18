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
       console.log(action, "ACT",  action.data)
        return {...weather, selectedLocation: action.data}
  }

  return weather

}
