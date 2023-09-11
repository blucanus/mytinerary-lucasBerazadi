import { createAction } from "@reduxjs/toolkit";

export const loadCities = createAction( 'load_cities', (cities) => {
    return {
        payload : cities
        
    }
})
export const citiesFilter = createAction( 'load_cities_filtered', ( search ) => {
    return {
        payload : {
            inputValue : search
        }
    }
} )