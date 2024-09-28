import React, { useState } from "react";
import "../index.css";
import productsData from "../Data/data.js";

const Product = ({ money, setMoney, purchasedAmounts, setPurchasedAmounts }) => {
    const [quantities, setQuantities] = useState(productsData.map(() => ''));

    const handleBuy = (price, index) => {
        const quantity = quantities[index] === '' ? 1 : parseInt(quantities[index]);
        const totalCost = price * quantity;

        if (money >= totalCost) {
            setMoney(money - totalCost);
            updatePurchasedAmount(index, purchasedAmounts[index] + quantity);
        }
    };

    const handleSell = (price, index) => {
        const quantity = quantities[index] === '' ? 1 : parseInt(quantities[index]);

        if (quantity <= purchasedAmounts[index]) {
            const totalRevenue = price * quantity;
            setMoney(money + totalRevenue);
            updatePurchasedAmount(index, purchasedAmounts[index] - quantity);
        }
    };

    const updatePurchasedAmount = (index, newAmount) => {
        const newPurchasedAmounts = [...purchasedAmounts];
        newPurchasedAmounts[index] = newAmount;
        setPurchasedAmounts(newPurchasedAmounts);
    };

    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = value === '' ? '' : Math.max(1, parseInt(value));
        setQuantities(newQuantities);
    };

    return (
        <div className="products">
            {productsData.map((product, index) => (
                <div key={index} className="product-card">
                    <div className="image-container">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${parseInt(product.price).toLocaleString('tr-TR')}</p>
                    <div className="exchange-container">
                        <button
                            className={`sell-button ${purchasedAmounts[index] >= (quantities[index] === '' ? 1 : parseInt(quantities[index])) ? 'active' : ''}`}
                            onClick={() => handleSell(product.price, index)}
                            disabled={purchasedAmounts[index] < (quantities[index] === '' ? 1 : parseInt(quantities[index]))}
                        >
                            Sell
                        </button>
                        <input
                            type="number"
                            value={quantities[index]}
                            min={1}
                            onChange={(e) => handleQuantityChange(index, e.target.value)}
                        />
                        <button
                            className={`buy-button ${money >= product.price * (quantities[index] === '' ? 1 : parseInt(quantities[index])) ? 'active' : ''}`}
                            onClick={() => handleBuy(product.price, index)}
                            disabled={money < product.price * (quantities[index] === '' ? 1 : parseInt(quantities[index]))}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;