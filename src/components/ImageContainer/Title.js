import React from "react";
import styled from 'styled-components'

const TitleHeader = styled.h1`
    font-size: 40px;
    text-align: center;
    color: navy;
`;

export default function({title}) {
    return (
        <TitleHeader className="title">
            {title}
        </TitleHeader>
    );
};
