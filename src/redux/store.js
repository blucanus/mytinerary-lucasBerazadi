import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";
import { userReducer } from "./reducers/userReducers";


export const store = configureStore ({
    reducer: {
        cities: citiesReducer,
        itineraries: itinerariesReducer,
        user : userReducer
    }
})