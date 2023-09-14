import React, { useEffect, useState } from 'react'
import { Link as AnchorLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/userAction';
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

    const user = useSelector(store => store.user.user)

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const dispatch = useDispatch()

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
        <AnchorLink className='nav-link' to="/">Home</AnchorLink>
        <AnchorLink className='nav-link' to="/cities">Cities</AnchorLink>
        {
          user ? (
            <AnchorLink className='nav-link' onClick={ () => dispatch(logOut())}>Log Out</AnchorLink>
          ) :
          (
            <>
            <AnchorLink className='nav-link' to="/signup">Sign Up</AnchorLink>
            <AnchorLink className='nav-link' to="/signin">Sign In</AnchorLink>
            </>
          )
        }
       
        </nav>
      </aside>
      <div className="sidebar-border" />    
    
    </>
  )
}
export default NavTop