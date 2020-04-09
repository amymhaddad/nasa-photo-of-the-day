import React from "react";
import styled from 'styled-components'

const Image = styled.img`
    width:450px;  
    height: auto;
`;

export default function({src, alt}) {
    return (
        <Image src={src} alt={alt} className="daily-photo"></Image>
  );
};