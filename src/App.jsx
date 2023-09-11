import React from 'react'
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'
import CityDetails from './components/City'

const router = createBrowserRouter([
  { 
    path: '/', element:<Home />
  },
  { path: '/', element:<Layout />,
  children:[
    {path: '/cities', element: <Cities />}
  ]
},
  {
    path: '/cities', element: <Layout />,
    children: [
      {path: '/cities/:id', element: <CityDetails/>}
    ]
  }
])

function App() {  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>        
    </>
  )
}

export default App
