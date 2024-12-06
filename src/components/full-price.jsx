import Price from "./price.jsx";
import OldPrice from "./old-price.jsx";
import React from "react";

function FullPrice({ price, oldPrice }) {
    const showOldPrice = Boolean(
        oldPrice && price < oldPrice
    );

    return (
        <React.Fragment>
            {showOldPrice && <OldPrice value={oldPrice} />}
            {showOldPrice && " "}
            <Price value={price} />
        </React.Fragment>
    )
}

export default FullPrice;