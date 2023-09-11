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
    const menuItems = [
        {href:'/',title:'Home'},
        {href:'cities',title:'Cities'},
        {href:'login',title:'Login'}
    ]
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle material-symbols-outlined"
        >
          {isOpen ? "X" : "="}
        </button>
        <img src={`../logo.svg`} />
        <nav className="text-center text-white">
        {menuItems.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)} 
        </nav>
      </aside>
      <div className="sidebar-border" />    
    
    </>
  )
}
export default NavTop