import React, { useState, useEffect } from "react";
import axios from 'axios';
import Image from "./Image";
import DescripeImage from "./DescribeImage";


export default function GetNasaDetails() {
    const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=hWzDdthh7TVbTzckIPaVsk2r7lfdGA8NoaQ0Tun6'
    let [data, setData] = useState({})
    
    useEffect(() => {
        axios.get(nasaUrl) 
            .then(function(response) {
                const dataUpdate = response.data
                setData(dataUpdate)
            })
            .catch(function (error) {
                console.log(error);
              }) 
    },[])
    return (
        <div className="images-container-wrapper">
            <Image 
                src={data.url} 
                alt={data.explanation} 
            />
            <DescripeImage 
                copyright={data.copyright}
                date={data.date}
                explanation={data.explanation}
                title={data.title}
            />  
        </div>
    );
};
