import React, { useState } from "react";
import Money from "./Components/money.jsx";
import Product from "./Components/product.jsx";
import Receipt from "./Components/receipt.jsx";
import products from "./Data/data.js";
import "./index.css";
import Header from "./Components/header.jsx";

const App = () => {
    const [money, setMoney] = useState(10000000000);
    const [purchasedAmounts, setPurchasedAmounts] = useState(products.map(() => 0));

    return (
        <>
           <div className="container">
               <Header/>
               <Money money={money} />
               <Product
                   money={money}
                   setMoney={setMoney}
                   purchasedAmounts={purchasedAmounts}
                   setPurchasedAmounts={setPurchasedAmounts}
               />
               <Receipt
                   purchasedAmounts={purchasedAmounts}
                   products={products}
               />
           </div>
        </>
    );
};

export default App;