import React, { useEffect, useState } from 'react'
import Anchor from '../Anchor'
import './style.css'



function NavTop() {
    //const toggleMenu = () => document.body.classList.toggle("open");
    /* const [open, setOpen] = useState(false)
    function toggleMenu() {
      setOpen(open ? false : true)
    }  */
    /* useEffect (() => {
        body.classList.toggle("close")
    }, []) */

    let data = [
        {href:'/',title:'Home'},
        {href:'cities',title:'Cities'},
        {href:'login',title:'Login'}
    ]
  return (
    <>

    {/* <button className="burger" onClick={toggleMenu}></button>
    { open && 
    <> */}
   {/*  <div className="background"></div> */}
    <nav className="navbar navbar-expand-lg nav-mytinerary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={`../logo.svg`} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id="menu">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)} 
          </ul>
        </div>
      </div>
    </nav>
 {/*    </>
    } */}
    
    </>
  )
}

export default NavTop