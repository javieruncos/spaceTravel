import React from "react";



const Destinos = ({ item ,obtenerP}) => {
   

  return (
    <>
      <button className="botonDestino" onClick={()=>obtenerP(item.id)}>{item.name}</button>
    </>
  );
};

export default Destinos;
