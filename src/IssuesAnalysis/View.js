import React from "react";
import MostCommonIssue from "./MostCommonIssue";
import WordsRanking from "./WordsRanking";
import Message from "./Message";
import "./css/IssuesAnalysis.css";

function View ({analysis, error}){
    if(error)
        return <Message value={error} />
    return (
        <div className="row analyzed-data">
            <MostCommonIssue titleInfo={analysis.mostCommonIssue} />
            <WordsRanking wordsInfo={analysis.wordRank} />
        </div>
    );
}

export default View;
