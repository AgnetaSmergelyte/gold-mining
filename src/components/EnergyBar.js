import React from 'react';
import '../App.css';

const EnergyBar = ({energy}) => {
    return (
        <div className="energy-bar">
            <div style={{width: energy + "%"}}></div>
        </div>
    );
};

export default EnergyBar;