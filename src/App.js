import './App.css';
import Upgrades from "./components/Upgrades";
import Inventory from "./components/Inventory";
import GoldPrice from "./components/GoldPrice";
import EnergyBar from "./components/EnergyBar";
import Dig from "./components/Dig";
import {useState} from "react";
import Error from "./components/Error";

function App() {
    const maxEnergyUsePerDig = 10;
    const goldPriceRange = [10, 30]
    const [money, setMoney] = useState(100);
    const [energy, setEnergy] = useState(100);
    const [maxGoldPerDig, setMaxGoldPerDig] = useState(1);
    const [goldArr, setGoldArr] = useState([]);
    const [inventoryLimit, setInventoryLimit] = useState(3);
    const [goldPrice, setGoldPrice] = useState(13);
    const [upgradesPrices, setUpgradesPrices] = useState([50, 50, 100]);
    const [inventoryFull, setInventoryFull] = useState(false);
    const [energyError, setEnergyError] = useState(false);

    function digGold() {
        const energyUse = Math.floor(Math.random() * maxEnergyUsePerDig) + 1;
        if (energy - energyUse <= 0) {
            setEnergyError(true);
            setTimeout(() => {
                setEnergyError(false);
            }, 1000);
            return;
        }
        if (goldArr.length === inventoryLimit) {
            return;
        } else if (goldArr.length === inventoryLimit - 1) setInventoryFull(true);
        setEnergy(energy - energyUse);
        const goldDug = Number(((Math.floor(Math.random()*100*(maxGoldPerDig)))/100+0.01).toFixed(2));
        setGoldArr([...goldArr, goldDug]);
    }
    function sellGold() {
        if (goldArr.length === 0) return;
        let moneyForGold = 0;
        goldArr.map(x => {
            moneyForGold += x * goldPrice;
        })
        moneyForGold = Number(moneyForGold.toFixed(2));
        setMoney(money + moneyForGold);
        setGoldArr([]);
        setInventoryFull(false);
        //new gold price
        const newPrice = Math.floor(Math.random() * (goldPriceRange[1] - goldPriceRange[0] + 1) + goldPriceRange[0]);
        setGoldPrice(newPrice);
    }

    function upgrade(name, priceIndex) {
        if (money - upgradesPrices[priceIndex] < 0) {
            alert("not enough money")
            return;
        }
        setMoney(money - upgradesPrices[priceIndex]);
        switch (name) {
            case 'dig-chance':
                const newArr = [...upgradesPrices];
                newArr[priceIndex] = upgradesPrices[priceIndex] + 50;
                setUpgradesPrices(newArr);
                setMaxGoldPerDig(maxGoldPerDig + 0.3);
                break;
            case 'restore-energy':
                if (energy + 20 > 100) {
                    setEnergy(100);
                    return;
                }
                setEnergy(energy + 20);
                break;
            case 'inventory-slot':
                setInventoryLimit(inventoryLimit + 1);
                setInventoryFull(false);
                break;
            default:
                return;
        }
    }

    return (
        <div className="container">
            <div className="game-board">
                <Upgrades upgradesPrices={upgradesPrices} upgradeFunc={upgrade} money={money}/>
                <div className="main">
                    <Inventory
                        goldArr={goldArr}
                        sellGold={sellGold}
                        inventoryFull={inventoryFull}
                    />
                    <div className="right-side">
                        <GoldPrice price={goldPrice}/>
                        <h1>MONEY {money.toFixed(2)}$</h1>
                        <div>
                            <EnergyBar energy={energy} />
                            {energyError ? <Error /> : <Dig digFunc={digGold}></Dig>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );}

export default App;
