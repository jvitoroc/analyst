import React from "react";

import Word from "../components/Word";

function WordsRanking(props){

    let renderRank = ()=>{
        return props.words.map((e, i)=>{
            return(
                <li key={i}>
                    <span className="hightlight word">{e[0]}</span>
                    <span className="times"> {e[1]} times used</span>
                </li>
            );
        });
    }

    return(
        <div className="col-6 most-used-words analyze-column">
            <div className="analyze-column-inner">
                <h4 className="title-words">Most used words in issues:</h4>
                <ul className="word-list">
                    {renderRank()}
                </ul>
            </div>
        </div>
    );
}

export default WordsRanking;
