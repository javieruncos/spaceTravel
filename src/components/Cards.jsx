import React from "react";
import { Col } from "react-bootstrap";

const Cards = ({ planeta, imgPlaneta }) => {
  return (
    <>
      <Col md={6}>
        <div className="text-ligh mt-5">
        <img src={require(`../img/image-${imgPlaneta}.png`)} alt="" className="w-75 imgPlaneta" />
        </div>
      </Col>
      <Col md={6}>
        <div className="text-light mt-5 descPlaneta">
          <h3 className="nombreTituloCard">{planeta.name}</h3>
          <p>{planeta.description}</p>
        </div>
        <hr className="text-light" />
        <div className="cardKM">
          <div>
            <h4> DISTANCE</h4>
            <p className="display-6">{planeta.distance}</p>
          </div>
          <div>
            <h4> TRAVEL TIME</h4>
            <p className="display-6">{planeta.travel}</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Cards;
