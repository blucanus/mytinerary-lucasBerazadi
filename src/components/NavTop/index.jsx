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

    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavTop