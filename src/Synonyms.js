import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
    return (
        <span>
            <strong>Synonyms: </strong>
            <ul className="Synonyms">
            {props.synonyms.map(function (synonym, index) {
                return <li key={index}>{synonym}</li>;
            })}
        </ul>
        </span>
    );
    } else {
        return null;
    }
}






// <em>{definition.Synonyms}</em>