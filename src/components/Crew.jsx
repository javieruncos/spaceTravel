import React, { useEffect } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import personCrew from "../assets/crew/image-anousheh-ansari.png";
import { obtenerCrew, obtenerIdCrew } from "../helper/queries";
import Btncrew from "./Btncrew";

const Crew = () => {
  const [person, setPerson] = useState({});
  const [arregloCrew, setArregloCrew] = useState([]);

  const personID = (id) => {
    obtenerIdCrew(id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log(respuesta.dato);
        setPerson(respuesta.dato);
      }
    });
  };

  useEffect(() => {
    obtenerCrew().then((respuesta) => {
      setArregloCrew(respuesta);
    });
  }, []);

  return (
    <div className="container">
      <div className="mt-5 text-light mb-5">
        <h1>02 MEET YOUR CREW</h1>
      </div>

      <div>
        <Row>
          <Col md={6}>
            <div className="text-light mt-5">
              <h2 className="display-6">{person.role}</h2>
              <h3 className="display-3">{person.name}</h3>
              <p className="mt-5">{person.bio}</p>
            </div>
            <div className="mt-4">
           {
            arregloCrew.map((item)=><Btncrew item={item} personID={personID}></Btncrew>)
           }

           </div>
          </Col>
          <Col md={6}>
            <div  style={{ height: 550 }}>
              <img
                src={personCrew}
                alt=""
                className="w-100"
                style={{ height: 550 }}
              />
            </div>
          </Col>
         
        </Row>
        
      </div>
    </div>
  );
};

export default Crew;
