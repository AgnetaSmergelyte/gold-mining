import React from 'react';
import '../App.css';
import golImg from '../images/gold.png'

const Inventory = ({goldArr, sellGold, inventoryFull}) => {
    return (
        <div className="inventory">
            <div>
                {goldArr.map((x,i) => 
                    <div key={i}>
                        <img src={golImg} alt=""/>
                        {x}g
                    </div>
                )}
            </div>
            {inventoryFull && <h1>Inventory Full</h1>}
            <h3 className="btn-gold" onClick={sellGold}>SELL GOLD</h3>
        </div>
    );
};

export default Inventory;