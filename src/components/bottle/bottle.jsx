import React from 'react';
import './bottle.css'

const Bottle = ({bottle}) => {
    const {img, name, seller, stock, price} = bottle;
    return (
        <div className='product-card bottle'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h4>Brand: {seller}</h4>
            <h3>${price}</h3>
            <p>{stock > 0 ? 'In stock' : 'Out of stock'}</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <button>Buy now</button>
            <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Bottle;