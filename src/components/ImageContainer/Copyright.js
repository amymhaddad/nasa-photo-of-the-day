import React from "react";
import styled from 'styled-components'

const CopyRight = styled.p`
    font-size: 25px;
    text-align: left;
    color: black;
`;
 
export default function({copyright}) {
    return (
        <CopyRight className="copyright">{copyright}</CopyRight>
    );
};
