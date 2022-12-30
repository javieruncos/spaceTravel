import React from "react";



const Destinos = ({ item ,obtenerP}) => {
   

  return (
    <>
      <button className="  ms-5 botonDestino" onClick={()=>obtenerP(item.id)}>{item.name}</button>
    </>
  );
};

export default Destinos;
