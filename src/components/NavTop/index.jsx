import React from 'react'
import Anchor from '../Anchor'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavTop() {
    let data = [
        {href:'/',title:'Home'},
        {href:'cities',title:'Cities'},
        {href:'login',title:'Login'}
    ]
  return (

    <Navbar sticky="top" expand="lg" className="nav-mytinerary">
      <Container>
        <Navbar.Brand href="#home"><img src="/logo-home.svg" className='img-responsive' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex flex-grow-0'>
          <Nav className="me-auto">
            {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavTop