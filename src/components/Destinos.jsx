import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cards from "./Cards";
import { obtenerId, obtenerPlanetas } from "../helper/queries";
import Planeta from "./Planeta";


const Destinos = ({ item ,obtenerP}) => {
   

  return (
    <>
      <button className="  ms-5 botonDestino" onClick={()=>obtenerP(item.id)}>{item.name}</button>
    </>
  );
};

export default Destinos;
