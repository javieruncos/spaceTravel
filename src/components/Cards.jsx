import React, { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import mars from "../assets/destination/image-mars.png"
import moon from "../assets/destination/image-moon.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"
const Cards = ({ planeta, setplanetasImg, planetasImg }) => {


  


  return (
    <>
      <Col md={6}>
        <div className="text-light">
         {
          planeta.id===1 ?  <img src={moon} alt="" className="w-75" /> :<img src="" alt="" className="w-75" />
         }
         {
            planeta.id===2 ?  <img src={mars} alt="" className="w-75" /> :<img src="" alt="" className="w-75" />
         }
         {
            planeta.id===3 ?  <img src={europa} alt="" className="w-75" /> :<img src="" alt="" className="w-75" />
         }
         {
            planeta.id===4 ?  <img src={titan} alt="" className="w-75" /> :<img src="" alt="" className="w-75" />
         }
        </div>
      </Col>
      <Col md={6}>
        <div className="text-light mt-5">
          <p>{planeta.description}</p>
        </div>
      </Col>
    </>
  );
};

export default Cards;
