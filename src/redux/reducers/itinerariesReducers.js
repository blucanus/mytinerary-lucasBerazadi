import { createReducer } from "@reduxjs/toolkit";
import { loadItineraries } from "../actions/itinerariesActions";

const initialState = {
    allItineraries: []
}

const itinerariesReducer = createReducer (initialState, (builder) => 
        builder
            .addCase(loadItineraries, (state, action) => {
                return {
                    ...state,
                    allItineraries: action.payload
                }
            })
)

export default itinerariesReducer