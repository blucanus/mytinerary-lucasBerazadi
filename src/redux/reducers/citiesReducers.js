import { createReducer } from "@reduxjs/toolkit";
import { citiesFilter, loadCities } from "../actions/citiesActions";

const initialState = {
    allCities: [],
    filteredCities: [],
    states: []
}

const citiesReducer = createReducer (initialState, (builder) =>
    builder
        .addCase(loadCities, (state, action) => {
           /*  const newStore = {...state} una manera de ver el return
            newStore.allCities = action.payload
            newStore.filteredCities = action.payload
            return newStore */
            return {
                ...state,
                allCities: action.payload,
                filteredCities: action.payload
            }
        })
        .addCase( citiesFilter, ( stateActual, action ) => {
            const filteredSearch = stateActual.allCities.filter( city => city.name.toLowerCase().includes( action.payload.inputValue )  )
            let newFilteredCities = filteredSearch
            return {
                ...stateActual,
                filteredCities : newFilteredCities
            }
        } ) 

)

export default citiesReducer