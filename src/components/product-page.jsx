import Code from "./code";
import Counter from "./counter.jsx";
import Description from "./description.jsx";
import Gallery from "./gallery";
import OldPrice from "./old-price.jsx";
import Price from "./price.jsx";
import Title from "./title";

function ProductPage({product}) {
    return (
        <section>
            <Title>{product.name}</Title>
            <Code>{product.code}</Code>
            <div style={{ display: "flex" }}>
                <Gallery src={product.src} alt={product.name}/>
                <div>
                    <p>
                        Цена: <OldPrice value={product.oldPrice}/> <Price value={product.price}/>
                    </p>
                    <div>
                        Количество: <Counter></Counter>
                    </div>
                    <p>
                        <span>Доставка:</span> 1 апреля
                    </p>
                    <button type="button">Купить</button>
                </div>
            </div>
            <Description text={product.description}/>
        </section >
    );
}

export default ProductPage;