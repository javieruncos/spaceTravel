import React, { useEffect,useState } from "react";
import { Row,Col } from "react-bootstrap";
import { obtenerIdTec, obtenerTec } from "../../helper/queries";
import BtnTechnology from "../BtnTechnology";
const Tecnologia = () => {

  const [arregloTec, setArregloTec] = useState([])
  const [vehiculos, setVehiculos] = useState({})
  const [imgVehiculo, setimgVehiculo] = useState("vehicle")


     useEffect(()=>{
         obtenerTec().then((respuesta)=>{
          setArregloTec(respuesta)
          setVehiculos(respuesta[0])
         })
     },[])

     const obtenerVehiculos = (id)=>{
        obtenerIdTec(id).then((respuesta)=>{
          if(respuesta.status === 200){
            setVehiculos(respuesta.dato)
            setimgVehiculo(respuesta.dato.images)
          }
        })
     }




  return (
    <div className="container-fluid ">
      <div className="mt-5 text-light mb-2 container divCrew">
        <h1>03 SPACE LAUNCH 101</h1>
      </div>
      <div>
        <Row>
             <Col className="col-12 col-md-12 col-lg-3 boxbtn">
               <div className="contenedorTec  ">
                {
                  arregloTec.map((item,indice)=><BtnTechnology item={item} key={indice} obtenerVehiculos={obtenerVehiculos}></BtnTechnology>)
                }
               </div>
             </Col>
             <Col className="col-12 col-md-6 col-lg-5">
              <div className="text-light contenedorTec ">
              <div>
               <h4>THE TECHNOLOGY</h4>
               <h2 className="display-2">{vehiculos.name}</h2>
               <p>{vehiculos.description}</p>
                </div>
              </div>
             </Col>
             <Col className="col-12 col-md-6 col-lg-4">
                <div className="contenedorVehicle">
                    <img src={require(`../../img/image-${imgVehiculo}.jpg`)} alt="vehiculo" className="w-100" />
                </div>
             </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tecnologia;
