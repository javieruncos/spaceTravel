import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg">
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
              <Nav.Link as={Link} to={"/"}className="text-light ms-4">
              00 HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"/destino"} className="text-light ms-4">
              01 DESTINATION
              </Nav.Link>
              <Nav.Link href="#link" className="text-light ms-4">
              02 CREW
              </Nav.Link>
              <Nav.Link href="#link" className="text-light ms-4">
              03 TECHNOLOGY
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar expand="lg" className="w-100">
          <div className="  divLogo">
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
            <div className="spanMenu ms-3"></div>
          </div>
          <Container className="NavbarSpace ">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="text-light navbar-dark ms-auto"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" d-flex justify-content-around gap-5 text-light">
                <div className="linkMenu">
                  <Nav.Link href="#home" className="text-light">
                    00 HOME
                  </Nav.Link>
                  <div className="link"></div>
                </div>
                <div className="linkMenu">
                  <Nav.Link href="#link" className="text-light linkMenu">
                    01 DESTINATION
                  </Nav.Link>
                  <div className="link"></div>
                </div>
                <div className="linkMenu">
                  <Nav.Link href="#link" className="text-light">
                    02 CREW
                  </Nav.Link>
                  <div className="link"></div>
                </div>
                <div className="linkMenu">
                  <Nav.Link href="#link" className="text-light">
                    03 TECHNOLOGY
                  </Nav.Link>
                  <div className="link"></div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
    </div>
  );
};

export default Menu;
