import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { obtenerCrew, obtenerIdCrew } from "../helper/queries";
import Btncrew from "./Btncrew";

const Crew = () => {
  const [arregloCrew, setArregloCrew] = useState([]);
  const [person, setPerson] = useState({});
  const[img,setImg] =useState("douglas")
 
  useEffect(() => {
    obtenerCrew().then((respuesta) => {
      setArregloCrew(respuesta);
      setPerson(respuesta[0])
    });
  }, []);


  const personID = (id) => {
    obtenerIdCrew(id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log(respuesta.dato);
        setPerson(respuesta.dato);
        setImg(respuesta.dato.images)
      }
    });
  };


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
            arregloCrew.map((item,indice)=><Btncrew item={item} personID={personID} key={indice}></Btncrew>)
           }

           </div>
          </Col>
          <Col md={6}>
            <div  style={{ height: 550 }}>
              <img
                src={require(`../img/image-${img}.png`)}
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
