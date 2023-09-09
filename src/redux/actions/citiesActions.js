import { createAction } from "@reduxjs/toolkit";

export const loadCities = createAction( 'load_cities', (cities) => {
    return {
        payload : cities
        
    }
})