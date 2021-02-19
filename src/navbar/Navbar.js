import React from 'react'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

import './nav.css';

function nav() {
    return (
        <div className="col-md-12 nav-bg" style={{zIndex:"9999",position:"fixed",background:"",borderBottom:"1px solid gray",height:"60px"}} >
           <Navbar  expand="lg">
  <Navbar.Brand href="#home" className="">ZIP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"white"}}/>
  <Navbar.Collapse id="basic-navbar-nav"  style={{marginTop:"px"}}>
    <Nav className="ml-auto" >
    <Nav.Link href="#home" className="nav-hov" style={{color:"",height:"53px",fontSize:"21px",fontWeight:"600",lineHeight:"28.13px",marginLeft:"30px",fontFamily:"Roboto"}}>BLOG</Nav.Link>
    <Nav.Link href="#home"className="nav-hov"  style={{color:"",height:"53px",fontSize:"21px",fontWeight:"600",lineHeight:"28.13px" ,marginLeft:"30px",fontFamily:"Roboto"}}>ABOUT</Nav.Link>
    <Nav.Link href="#home" className="nav-hov"  style={{color:"",height:"53px",fontSize:"21px",fontWeight:"600",lineHeight:"28.13px" ,marginLeft:"30px",fontFamily:"Roboto"}}>LINKS</Nav.Link>
    <Nav.Link href="#home" className="nav-hov" style={{color:"",height:"53px",fontSize:"21px",fontWeight:"600",lineHeight:"28.13px",marginLeft:"30px",fontFamily:"Roboto",marginRight:"30px"}}>PROJECTS</Nav.Link>
    <Nav.Link href="#home"  className="m-auto">
    </Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default nav