import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import {store} from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='493742258975-vcabcu2fu54gus2p5l0dsm14sdt21780.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>      
  </Provider>
  
)
