import React from 'react'
import Anchor from '../Anchor'
import './style.css'

function Navbar() {
    let data = [
        {href:'/',title:'Home'},
        {href:'cities',title:'Cities'},
        {href:'login',title:'Login'}
    ]
  return (
    <nav>
        {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)}
    </nav>    
  )
}

export default Navbar