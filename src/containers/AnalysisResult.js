import React from "react";

import WordsRanking from "./WordsRanking";
import MostCommonIssue from "../components/MostCommonIssue";
import Message from "../components/Message";

class AnalysisResult extends React.Component{

    branchRender(){
        let data = this.props.data;
        if(data === null){
            return <Message value={"An error occurred trying to analyze data!"} />
        }else{
            return (
                <div className="row analyzed-data">
                    <WordsRanking words={data.topTenWords} />
                    <MostCommonIssue issue={data.mostCommonIssue} />
                </div>
            )
        }
    }

    render(){
        return this.branchRender();
    };
}

export default AnalysisResult;
