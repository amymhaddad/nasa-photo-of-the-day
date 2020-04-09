import React from "react";
import styled from 'styled-components'

const Explanation = styled.p`
    font-size: 15px;
    text-align: left;
    color: black;
    line-height: 1.5;
`;

export default function({explanation}) {
    return (
        <Explanation>{explanation}</Explanation>
    );
};