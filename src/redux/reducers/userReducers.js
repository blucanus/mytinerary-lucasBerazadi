import { createReducer } from "@reduxjs/toolkit";
import { uploadUser, signUp, signIn, signInWhitToken, logOut } from "../actions/userAction";

const initialState = {
    user: null,
    token: null
}
export const userReducer = createReducer(initialState, (builder)=> 
    builder
        .addCase(uploadUser, (stateActual, action)=> {
            return {
                ...stateActual,
                user: action.payload
            }
        })
        .addCase( signUp.fulfilled, (stateActual, action)=> {
           return {
                ... stateActual,
                user: action.payload.user,
                token: action.payload.token
           }
        })
        .addCase(signIn.fulfilled, (stateActual, action)=> {
            return {
                ...stateActual,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(signInWhitToken.fulfilled, (stateActual, action)=> {
            return {
                ...stateActual,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(logOut, (stateActual, action)=> {
            return {
                ...stateActual,
                user: null,
                token: null
            }
        })
)