import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottlesData = use(bottlesPromise);

    const [buy, setBuy] = useState([]);
    const [cart, setCart] = useState([]);

    const handleBuynow = (bottle) => {
        console.log('buy the bottle', bottle);
    }
    
    const handleCart = (bottle) => {
        console.log('added cart successfully',bottle)
    }
    return (
        <div className='product-cards-layout'>
            {
                bottlesData.map(bottle => <Bottle key={bottle.id}
                    bottle={bottle}
                    handleBuynow={handleBuynow}
                    handleCart={handleCart}></Bottle>)
            }
        </div>
    );
};

export default Bottles;