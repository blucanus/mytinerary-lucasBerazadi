import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
          <div className="container"  >
            <div className="row">
              <div className="col mt-5">
                <Outlet />
              </div>
            </div>
          </div>
        <Footer />
    </>
    
  )
}
export default Layout