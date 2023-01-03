import React from 'react';


const Btncrew = ({item ,personID}) => {
    return (
        <>
            <button onClick={()=>personID(item.id)} className="mx-2 botonDestino2">{item.id}</button>
        </>
    );
};

export default Btncrew;