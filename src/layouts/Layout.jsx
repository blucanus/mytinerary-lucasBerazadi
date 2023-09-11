import React from 'react'
import './style.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout() {
  return (
    <>
        <Header />
          <div className="container"  >
            <div className="row main-principal">
              
                <Outlet />
              
            </div>
          </div>
        <Footer />
    </>
    
  )
}
export default Layout