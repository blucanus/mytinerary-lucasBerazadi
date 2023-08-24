import React, { useEffect, useState } from 'react'
import Anchor from '../Anchor'
import './style.css'



function NavTop() {
    //const toggleMenu = () => document.body.classList.toggle("open");
    const [open, setOpen] = useState(false)
    function toggleMenu() {
      setOpen(open ? false : true)
    } 
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

    <button className="burger" onClick={toggleMenu}></button>
    { open && 
    <>
    <div className="background"></div>
    <div className="menu">
      <nav>
        {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)} 
      </nav>
    </div>
    </>
    }
    
    </>
  )
}

export default NavTop