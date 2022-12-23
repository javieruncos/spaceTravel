import React from "react";
import { Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Planeta = ({arregloPlaneta}) => {
  return (
    <div>
      <Row>

        {
            arregloPlaneta.map((item)=><Cards item={item} key={item.id}></Cards>)
        }
      
        {/* <Col md={6}>
          <div>
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="navbar-dark"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto   d-flex justify-content-around ">
                    <Nav.Link as={Link} to={"/"} className="text-light ms-4">
                      HOME
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={"/destino"}
                      className="text-light ms-4"
                    >
                      DESTINATION
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-light ms-4">
                      CREW
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-light ms-4">
                      TECHNOLOGY
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default Planeta;
