import React from 'react';
import '../App.css';

const GoldPrice = ({price}) => {
    return (
        <div className="component price-label">
            <h2>CURRENT GOLD PRICE - <span>{price}$</span> PER 1G</h2>
        </div>
    );
};

export default GoldPrice;