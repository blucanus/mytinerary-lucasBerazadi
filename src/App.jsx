import React from 'react'
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'

const router = createBrowserRouter([
  { path: '/', element:<Layout />,
    children:[
      { path: '/', element:<Home />},
      {path: '/cities', element: <Cities />}
    ]
  }
/*   {path: '/cities/:id', element: <Cities />}
 */
])

function App() {  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>        
    </>
  )
}

export default App
