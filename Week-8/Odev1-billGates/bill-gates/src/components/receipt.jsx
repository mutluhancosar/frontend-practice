
import React from "react";

const Receipt = ({ purchasedAmounts, products }) => {
    const productTotals = products.map((product, index) => {
        return {
            name: product.name,
            quantity: purchasedAmounts[index],
            total: product.price * purchasedAmounts[index],
        };
    });

    const totalSpent = productTotals.reduce((sum, product) => sum + product.total, 0);

    return (
        <div className="receipt">
            <div className="receipt-header">
                <h2>Receipt</h2>
            </div>
            <div className="receipt-main">
                <ul>
                    {productTotals.map(
                        (item, index) =>
                            item.quantity > 0 && (
                                <li key={index}>
                                    {item.name}: x {item.quantity} = ${item.total.toLocaleString()}
                                </li>
                            )
                    )}
                </ul>
            </div>
            <div className="total">
                <h3>Total Spent: ${totalSpent.toLocaleString()}</h3>
            </div>
        </div>
    );
};

export default Receipt;
