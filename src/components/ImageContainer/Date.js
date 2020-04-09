import React from "react";
import styled from 'styled-components'

const Date = styled.h3`
    font-size: 25px;
    text-align: center;
    color: red;
`;

export default function({date}) {
    return (
        <Date>{date}</Date>
    );
};
