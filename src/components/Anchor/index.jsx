import React from 'react'
import { Link as AnchorLink } from 'react-router-dom'
import './style.css'


function Anchor({href, title}) {

  return (
    <>  
      <AnchorLink className='nav-link' to={href}>{title}</AnchorLink>
    </>
  )
}
export default Anchor