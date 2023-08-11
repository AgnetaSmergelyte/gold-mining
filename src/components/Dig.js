import React from 'react';
import '../App.css';

const Dig = ({digFunc}) => {
    return (
        <div className="btn-gold-big" onClick={digFunc}>
            DIG GOLD
        </div>
    );
};

export default Dig;