import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../style/Inicio.css"

const Inicio = () => {
  return (
    <Container>
      <Row className="mt-5 contenedorInicio">
        <Col md={6}>
          <div className="text-light tituloPrincipal">
            <h2 className="text-center space2">SO,YOU WANT TO TRAVEL TO</h2>
            <h1 className="text-center space">SPACE</h1>
            <div className="w-75 mx-auto">
            <p>Let´s face it ; if you want to go to space . you might as well genuinely go to outer space and not hover kind of on the edge of it : wEll sit back,andrelax because well give you a truly out of this world experience!</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
            <div className="explorer">
               <h4>EXPLORER</h4>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;

