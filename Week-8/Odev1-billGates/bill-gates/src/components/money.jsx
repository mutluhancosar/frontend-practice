
import React from "react";
import "../index.css";

const Money = ({ money }) => {
    return (
        <div className="remaining-money">
            <h2>${money.toLocaleString()}</h2>
        </div>
    );
};

export default Money;
