import React from "react";
import Copyright from "./Copyright";
import Date from "./Date";
import AboutImage from "./AboutImage";
import Title from "./Title";

export default function({copyright, date, explanation, title}) {
    return (
        <div className="image-description-container">
            <Title title={title}/>
            <Date date={date}/>
            <Copyright copyright={copyright}/>
            <AboutImage explanation={explanation} />
        </div>
    );
};