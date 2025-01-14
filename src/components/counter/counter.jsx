import Button from "./../button/button"
import { StyledCounter, Value } from "./styled";

function Counter({ className, value, onChange, minValue }) {
    const isDisabledMinus = value === minValue;

    return (
        <StyledCounter className={className}>
            <Button
                disabled={isDisabledMinus}
                size="small"
                onClick={() => {
                    console.log("уменьшение счётчика на 1")
                    onChange && onChange(value - 1)
                }}
            >-</Button>
            <Value
                value={value}
                size={1}
                onChange={(evt) => {
                    const value = Number(evt.target.value);
                    onChange(value < minValue ? minValue : value)
                }}  
            />
            <Button
                size="small"
                onClick={() => {
                    console.log("увеличение счётчика на 1")
                    onChange && onChange(value + 1)
                }}
            >+</Button>
        </StyledCounter >
    );
}

export default Counter;