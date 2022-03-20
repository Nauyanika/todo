import React from 'react'
import {Navbar,Nav, Container } from 'react-bootstrap';
import { Link} from "react-router-dom";

function MyNavbar() {
  return (
    <div>


<Navbar bg="primary" variant="dark">
    <Container >
    <Navbar.Brand to="/Home">Todo</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/Login"className='text-white m-2'>Login</Link>
    <Link to="/Register"className='text-white m-2'>  Registration</Link>
      
    </Nav></Container>
  </Navbar>
  </div>
  )
}

export default MyNavbar
