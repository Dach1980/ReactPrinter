import styled from "styled-components";

const Button = styled.button`
    padding: 0;
    border: none;
    cursor: pointer;
    box-shadow: none;
    display: block;
    background: none;
    outline: none;

    &:active,
    &:hover {
    background: none;
    box-shadow: none;
    }
`;

export default Button;
