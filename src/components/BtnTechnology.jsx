import React from 'react';

const BtnTechnology = ({item,obtenerVehiculos}) => {
    return (
      <>
      <div>
       <button className='BtnTec my-2' onClick={()=>obtenerVehiculos(item.id)}>{item.id}</button>
      </div>
      
      </>
    );
};

export default BtnTechnology;