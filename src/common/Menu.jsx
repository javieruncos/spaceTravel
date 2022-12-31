import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Menu = ({fondo,setfondo,cambiarFondo,backgroundApp,backgroundDestinos}) => {
  return (
    <div>
      {/* <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <span className="ms-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#FFF" />
                  <path
                    fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                  />
                </g>
              </svg>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto   d-flex justify-content-around NavbarSpace">
              <div>
              <Button as={Link} to={"/"}className="btn btn-outline-dark text-light ms-4 btnNav" onClick={()=>cambiarFondo(backgroundApp)}>
              00 HOME
              </Button>
              <Button as={Link} to={"/destino"} className="btn btn-outline-dark text-light ms-4 btnNav" onClick={()=>cambiarFondo(backgroundDestinos)}>
              01 DESTINATION
              </Button>
              <Button as={Link} to={"/destino"} className="btn btn-outline-dark text-light ms-4 btnNav" onClick={()=>cambiarFondo(backgroundDestinos)}>
              02 CREW
              </Button>
              <Button as={Link} to={"/destino"} className="btn btn-outline-dark text-light ms-4 btnNav" onClick={()=>cambiarFondo(backgroundDestinos)}>
              03 TECHNOLOGY
              </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar  expand="lg" className=" navbarSpace navbar-dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navSpace">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
             
              <Button as={Link} to={"/"}className="btn btn-outline-dark text-light  btnNav" onClick={()=>cambiarFondo(backgroundApp)}>
              01 HOME
              </Button>
              <Button as={Link} to={"/destino"} className="btn btn-outline-dark text-light  btnNav" onClick={()=>cambiarFondo(backgroundDestinos)}>
              02 DESTINATION
              </Button>
              <Button as={Link} to={"/destino"} className="btn btn-outline-dark text-light  btnNav" onClick={()=>cambiarFondo(backgroundDestinos)}>
              03 CREW
              </Button>
              <Button as={Link} to={"/destino"} className="btn btn-outline-dark text-light  btnNav" onClick={()=>cambiarFondo(backgroundDestinos)}>
              04 TECHNOLOGY
              </Button>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Menu;
