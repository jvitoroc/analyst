import React from "react";

function Word ({word, occurrences}){

    return (
        <li><span className="hightlight">{word}</span>: {occurrences}</li>
    );
}

export default Word;
