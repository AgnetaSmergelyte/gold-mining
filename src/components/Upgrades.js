import React from 'react';
import '../App.css';

const Upgrades = ({upgradesPrices, upgradeFunc}) => {
    return (
        <div className="component upgrades">
            <div>Gives 0.3g to gold dig chance
                <div className="btn-small" onClick={() => upgradeFunc('dig-chance', 0)}>
                    Buy for {upgradesPrices[0]}$
                </div>
            </div>
            <div>Restore 20% energy
                <div className="btn-small" onClick={() => upgradeFunc('restore-energy', 1)}>
                    Buy for {upgradesPrices[1]}$
                </div>
            </div>
            <div>One slot in inventory
                <div className="btn-small" onClick={() => upgradeFunc('inventory-slot', 2)}>
                    Buy for {upgradesPrices[2]}$
                </div>
            </div>
        </div>
    );
};

export default Upgrades;