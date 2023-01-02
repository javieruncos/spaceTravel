import React, { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import mars from "../assets/destination/image-mars.png";
import moon from "../assets/destination/image-moon.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
const Cards = ({ planeta, setplanetasImg, planetasImg }) => {
  return (
    <>
      <Col md={6}>
        <div className="text-ligh mt-5">
          {planeta.id === 1 ? (
            <img src={moon} alt="" className="w-75 imgPlaneta" />
          ) : (
            <img src="" alt="" className="w-75" />
          )}
          {planeta.id === 2 ? (
            <img src={mars} alt="" className="w-75 imgPlaneta" />
          ) : (
            <img src="" alt="" className="w-75" />
          )}
          {planeta.id === 3 ? (
            <img src={europa} alt="" className="w-75 imgPlaneta" />
          ) : (
            <img src="" alt="" className="w-75" />
          )}
          {planeta.id === 4 ? (
            <img src={titan} alt="" className="w-75 imgPlaneta" />
          ) : (
            <img src="" alt="" className="w-75" />
          )}
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
            <h4>AVG. DISTANCE</h4>
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
