import React, { useEffect ,useState} from 'react';
import { obtenerPlanetas } from '../helper/queries';
import Planeta from './Planeta';

const Destination = () => {
   const [arregloPlaneta, setArregloPlaneta] = useState([])

   useEffect(()=>{
     obtenerPlanetas().then((respuesta)=>{
     console.log(respuesta)
     setArregloPlaneta(respuesta)
     })
   },[])

    return (
        <div>
            <div>

            </div>
            <Planeta arregloPlaneta={arregloPlaneta}></Planeta>
        </div>
    );
};

export default Destination;