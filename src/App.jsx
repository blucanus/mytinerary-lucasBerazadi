import React, { useEffect } from 'react'
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'
import CityDetails from './components/City'
import { SignUp } from './pages/Signup'
import { Signin } from './pages/Signin'
import { signInWhitToken } from './redux/actions/userAction'
import { useDispatch } from 'react-redux'

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
  },
  {
    path: '/signup', element: <Layout />,
    children: [
      {path: '/signup', element: <SignUp/>}
    ]
  },
  {
    path: '/signin', element: <Layout />,
    children: [
      {path: '/signin', element: <Signin/>}
    ]
  }
])

function App() { 
  
  const dispatch = useDispatch()
  useEffect(()=> {
    const token = localStorage.getItem('token')
      if(token) {
        dispatch(signInWhitToken())
      }
  }, [])

  return (
   
      <RouterProvider router={router}></RouterProvider>        
 
  )
}

export default App
