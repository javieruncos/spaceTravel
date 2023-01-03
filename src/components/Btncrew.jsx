import React from 'react';
import { Button } from 'react-bootstrap';

const Btncrew = ({item ,personID}) => {
    return (
        <>
            <button onClick={()=>personID(item.id)} className="mx-2 botonDestino2">{item.id}</button>
        </>
    );
};

export default Btncrew;