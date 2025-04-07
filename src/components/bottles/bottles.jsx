import React, { use } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'

const Bottles = ({bottlesPromise}) => {

    const bottlesData = use(bottlesPromise);
    console.log(bottlesData)
    return (
        <div className='product-cards-layout'>
            {
                bottlesData.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;