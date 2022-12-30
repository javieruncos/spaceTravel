import React from "react";
import { Row } from "react-bootstrap";
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
