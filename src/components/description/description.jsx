import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription }) {
    const handleClick = () => {
        onShowMore(); // вызываем функцию для показа/скрытия текста
        console.log("скрытие/открытие всего текста"); // выводим сообщение в консоль
    }

    return (
        <>
            {text}
            <DescriptionButton
                onClick={handleClick}
            >
                {isShowAllDescription ? "Скрыть" : "Подробнее"}
            </DescriptionButton>
        </>
    );
}

export default Description