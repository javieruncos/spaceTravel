import React from 'react';
import { Col } from 'react-bootstrap';

const Cards = ({item}) => {
    return (
     <>
       <Col md={6}>
          <div className='text-light'>
            <img src= {item.images.png} alt="" />
          </div>
        </Col>
     </>
    );
};

export default Cards;