import React from 'react';
import './Navcomp.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navcomp = () => {
    return (
        <div >
            <>
      {[false,].map((expand) => (
        <Navbar key={expand}   expand={expand} className=" mb-3 navstyle fixed-top">
          <Container fluid>
            {/* <Navbar.Brand href="#">Rashed</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className='off'>Rashed</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-center linkt  flex-grow-1 pe-3">
                  <Nav.Link  className='link'  to="/" >Home</Nav.Link>
                  <Nav.Link className='link'  to="/about" >About</Nav.Link>
                  <Nav.Link className='link'  to="/projects" >Projects</Nav.Link>
                  <Nav.Link className='link'  to="/contact" >Contact</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
        </div>
    );
};

export default Navcomp;