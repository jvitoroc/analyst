import React from "react";

function Word(props){
    return(
        <li>
            <span className="hightlight word">{props.title}</span>
            <span className="times"> {props.times} times used</span>
        </li>
    );
}

export default Word;
