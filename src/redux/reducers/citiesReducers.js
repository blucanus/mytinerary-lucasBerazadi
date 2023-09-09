import { createReducer } from "@reduxjs/toolkit";
import { loadCities } from "../actions/citiesActions";

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
        /* .addCase()
        .addCase() */
)

export default citiesReducer