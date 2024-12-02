import Code from "./code";
import Counter from "./counter.jsx";
import Description from "./description.jsx";
import Gallery from "./gallery";
import OldPrice from "./old-price.jsx";
import Price from "./price.jsx";
import Title from "./title";

function ProductPage() {
    return (
        <section>
            <Title />
            <Code />
            <div style={{ display: "flex" }}>
                <Gallery />
                <div>
                    <p>
                        Цена: <OldPrice /> <Price />
                    </p>
                    <div>
                        Количество: <Counter />
                    </div>
                    <p>
                        <span>Доставка:</span> 1 апреля
                    </p>
                    <button type="button">Купить</button>
                </div>
            </div>
            <Description />
        </section >
    );
}

export default ProductPage;