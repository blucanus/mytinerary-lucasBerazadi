import React from 'react'
import { Link as AnchorLink } from 'react-router-dom'
import './style.css'
import { Nav } from 'react-bootstrap'



function Anchor({href, title}) {

  return (
    <>  
      <AnchorLink className='anchorLink nav-link' to={href}>{title}</AnchorLink>
    </>
  )
}
export default Anchor