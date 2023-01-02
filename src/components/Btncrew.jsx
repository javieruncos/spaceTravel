import React from 'react';
import { Button } from 'react-bootstrap';

const Btncrew = ({item ,personID}) => {
    return (
        <>
            <Button onClick={()=>personID(item.id)} className="mx-2 botonDestino">{item.id}</Button>
        </>
    );
};

export default Btncrew;