import React from 'react';
import './bottle.css'

const Bottle = ({bottle}) => {
    const {img, name} = bottle;
    return (
        <div className='product-card bottle'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
        </div>
    );
};

export default Bottle;