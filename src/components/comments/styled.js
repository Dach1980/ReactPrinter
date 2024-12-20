import styled from "styled-components";
import {Li, P} from "./../elements"
import Title from "./../title/title"
import Button from "../button/button";

export const CommentsTitle = styled(Title)`
margin-bottom: 20px;
`
export const CommentsLi = styled(Li)`
margin-bottom: 10px;
`
export const CommentsButton = styled(Button)`
margin-top: 20px;
`

export const Name = styled.span`
display: block;
font-weight: bold;
font-size: 18px;
color: #888888;
margin-bottom: 5px;
`
export const Text = styled(P)`
font-size: 16px;
line-height: 1.5;
color: #333333;
`
