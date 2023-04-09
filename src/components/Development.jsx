import React from "react";
import styled from "styled-components";

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 1s infinite ease alternate;

@media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
}

@keyframes animate {
    to{
        transform: translateY(25px);
    }
}
`
const Development = () => {
    return (
        <div><Img src="./img/developer.png" /></div>
    )
}

export default Development