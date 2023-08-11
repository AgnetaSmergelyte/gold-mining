import React from 'react';
import '../App.css';

const Upgrades = ({upgradesPrices, upgradeFunc, money}) => {
    const upgradeCardClass = upgradesPrices.map(x => x <= money ? "" : "disabled");
    const upgrades = [{
        label: "Gives 0.3g to gold dig chance",
        title: "dig-chance"
        },
        {
            label: "Restore 20% energy",
            title: "restore-energy"
        },
        {
            label: "One slot in inventory",
            title: "inventory-slot"
        }
    ]

    return (
        <div className="component upgrades">
            {upgrades.map((x,i) => (
                <div className={upgradeCardClass[i]}>{x.label}
                    <div className="btn-small" onClick={() => upgradeFunc(x.title, i)}>
                        Buy for {upgradesPrices[i]}$
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Upgrades;