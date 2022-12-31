import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = ({
  fondo,
  setfondo,
  cambiarFondo,
  backgroundApp,
  backgroundDestinos,
}) => {
  return (
    <div>
      <Navbar expand="lg" className=" navbarSpace navbar-dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navSpace">
              <Button
                as={Link}
                to={"/"}
                className="btn btn-outline-dark text-light  btnNav"
                onClick={() => cambiarFondo(backgroundApp)}
              >
                01 HOME
              </Button>
              <Button
                as={Link}
                to={"/destino"}
                className="btn btn-outline-dark text-light  btnNav"
                onClick={() => cambiarFondo(backgroundDestinos)}
              >
                02 DESTINATION
              </Button>
              <Button
                as={Link}
                to={"/destino"}
                className="btn btn-outline-dark text-light  btnNav"
                onClick={() => cambiarFondo(backgroundDestinos)}
              >
                03 CREW
              </Button>
              <Button
                as={Link}
                to={"/destino"}
                className="btn btn-outline-dark text-light  btnNav"
                onClick={() => cambiarFondo(backgroundDestinos)}
              >
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
