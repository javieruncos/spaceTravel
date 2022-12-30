import React from "react";
import { Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Planeta = ({ arregloPlaneta }) => {
  return (
    <div>
      <Row>
        {arregloPlaneta.map((item) => (
          <Cards item={item} key={item.id}></Cards>
        ))}
      </Row>
    </div>
  );
};

export default Planeta;
