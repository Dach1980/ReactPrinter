import OldPrice from "../old-price/old-price.jsx";
import {InnerPrice, PriceWrapper} from "./styled.js"

function FullPrice({ price, oldPrice, className }) {
    const showOldPrice = oldPrice && price < oldPrice;

    return (
        <PriceWrapper className={className}>
            {showOldPrice && <OldPrice value={oldPrice} />}
            {showOldPrice && " "}
            <InnerPrice value={price} />
        </PriceWrapper>
    )
}

export default FullPrice;