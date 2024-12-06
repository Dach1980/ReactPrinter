import React from "react";
import Code from "./code.jsx";
import Comments from "./comments.jsx";
import Counter from "./counter.jsx";
import Description from "./description.jsx";
import FullPrice from "./full-price.jsx";
import Gallery from "./gallery.jsx";
import Popularity from "./popularity.jsx";
import Title from "./title.jsx";

function ProductPage({product}) {
    return (
        <section>
            <Title>{product.name}</Title>
            <Code>{product.code}</Code>
            <div style={{ display: "flex" }}>
                <Gallery src={product.src} alt={product.name}/>
                <div>
                    <p>
                        Цена: {" "}
                        <FullPrice oldPrice={product.oldPrice} price={product.price} />
                    </p>
                    <div>
                        Количество: <Counter/>
                    </div>
                    <p>
                        <span>Доставка:</span> {product.delivery}
                    </p>
                    <button type="button">Купить</button>
                    <Popularity count={product.comments.length}/>
                </div>
            </div>
            <Description text={product.description}/>
            <Comments comments={product.comments}/>
        </section >
    );
}

export default ProductPage;