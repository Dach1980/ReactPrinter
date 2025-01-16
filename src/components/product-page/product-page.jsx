import { useState } from "react";
import Code from "../code/code.jsx";
import Comments from "../comments/comments.jsx";
import Description from "../description/description.jsx";
import Popularity from "../popularity/popularity.jsx";
import Tabs from "../tabs/tabs.jsx";
import Title from "../title/title.jsx";
import Slider from "../slider/slider.jsx"
import {
    StyledProductPage,
    Header,
    ProductWrapper,
    ProductInfo,
    ProductInfoLine,
    PageCounter,
    BuyButton,
    PageFullPrice,
    DeliveryValue
} from "./styled";
import Order from "../order/order.jsx";
import Accordion from "../accordion/accordion.jsx";
import PopUp from "./../popup/popup.jsx";

const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

function ProductPage({ product, showInfoInAccordion }) {
    const [productCount, setProductCount] = useState(1);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isShowAllDescription, setIsShowAllDescription] = useState(false);
    const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);
    const price = product.price * productCount;
    const oldPrice = product.oldPrice * productCount;

    const tabs = [
        {
            title: "Описание",
            content: <Description
                text={
                    isShowAllDescription
                        ? product.description
                        : product.description.slice(0, MAX_TEXT_SIZE)
                }
                onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
                isShowAllDescription={isShowAllDescription}
            />
        },
        {
            title: "Комментарии",
            content: <Comments
                comments={product.comments.slice(0, commentsShow)}
                onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
                allCommentsLength={product.comments.length}
            />
        }
    ];

    return (
        <StyledProductPage>
            <Header>
                <Title>{product.name}</Title>
                <Code>{product.code}</Code>
            </Header>
            <ProductWrapper>
                <Slider images={product.images} />
                <ProductInfo>
                    <ProductInfoLine>
                        Цена:{" "}
                        <PageFullPrice oldPrice={oldPrice} price={price} />
                    </ProductInfoLine>
                    <ProductInfoLine>
                        Количество: {" "}
                        <PageCounter
                            value={productCount}
                            minValue={1}
                            onChange={setProductCount}
                        />
                    </ProductInfoLine>
                    <ProductInfoLine>
                        <span>Доставка:</span>{" "}
                        <DeliveryValue>{product.delivery}</DeliveryValue>
                    </ProductInfoLine>
                    <BuyButton
                        size="large"
                        onClick={() => {
                            setIsShowPopup(true)
                            console.log("открытие окна оформления заказа")
                        }}
                    >Купить
                    </BuyButton>
                    <Popularity count={product.comments.length} />
                </ProductInfo>
            </ProductWrapper>
            {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
            <PopUp
                isShow={isShowPopup}
                onClose={() => setIsShowPopup(false)}
                title="Оформление"
            >
                <Order />
            </PopUp>
        </StyledProductPage>
    );
}

export default ProductPage;