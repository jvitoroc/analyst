import React from "react";

import Word from "../components/Word";

function WordsRanking(props){

    let renderRank = ()=>{
        return props.words.map((e, i)=>{
            return(
                <Word key={i} title={e[0]} times={e[1]} />
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
