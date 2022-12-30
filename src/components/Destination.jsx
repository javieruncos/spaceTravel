import React, { useEffect, useState } from "react";
import {  obtenerPlanetas } from "../helper/queries";
import Cards from "./Cards";
import Destinos from "./Destinos";
import { Row } from "react-bootstrap";


const Destination = ({
  planeta,
  setPlaneta,
  obtenerP,
  planetasImg,
  setplanetasImg,
}) => {
  const [arregloPlaneta, setArregloPlaneta] = useState([]);

  useEffect(() => {
    obtenerPlanetas().then((respuesta) => {
      setArregloPlaneta(respuesta);
      setPlaneta(respuesta[0]);
      console.log(respuesta);
    });
  }, []);

  return (
    <div className="container">
      <div className="contenedorLinks">
        {arregloPlaneta.map((item) => (
          <Destinos item={item} key={item.id} obtenerP={obtenerP}></Destinos>
        ))}
      </div>
      <Row>
        <Cards
          planeta={planeta}
          planetasImg={planetasImg}
          setplanetasImg={setplanetasImg}
        ></Cards>
      </Row>
    </div>
  );
};

export default Destination;
