import React from "react";
import Word from "./Word";

function WordsRanking ({wordsInfo}){

    let renderRanking = ()=>{
        return wordsInfo.map((e,i)=>{
            return <Word {...e} key={i} />
        });
    };

    return (
        <div className="col-6 most-used-words analyze-column-inner">
            <h4>Most used words in their number of occurrences found in issues:</h4>
            <ul className="word-list">
                {renderRanking()}
            </ul>
        </div>
    );
}

export default WordsRanking;
