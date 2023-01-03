import React, { useEffect, useState } from "react";
import { obtenerPlanetas } from "../helper/queries";
import Cards from "./Cards";
import Destinos from "./Destinos";
import { Row, Col } from "react-bootstrap";

const Destination = ({
  planeta,
  setPlaneta,
  obtenerP,
  planetasImg,
  setplanetasImg,
  imgPlaneta
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
    <div className="container mb-5">
      <div>
        <Row className="rowDestinos">
          <Col md={6}>
            <div className="mt-5 text-light mb-5">
              <h1>01 PICK YOUR DESTINATION</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="contenedorLinks">
              {arregloPlaneta.map((item) => (
                <Destinos
                  item={item}
                  key={item.id}
                  obtenerP={obtenerP}
                ></Destinos>
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <Row className="mt-1">
        <Cards
          planeta={planeta}
          planetasImg={planetasImg}
          setplanetasImg={setplanetasImg}
          imgPlaneta={imgPlaneta}
        ></Cards>
      </Row>
    </div>
  );
};

export default Destination;
