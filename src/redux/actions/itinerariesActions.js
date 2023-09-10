import { createAction } from "@reduxjs/toolkit";

export const loadItineraries = createAction('loadItineraries', (itineraries) => {
    return {
        payload: itineraries
    }
})