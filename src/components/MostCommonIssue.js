import React from "react";

function MostCommonIssue(props){
    return(
        <div className="col-6 most-common-issue analyze-column">
            <div className="analyze-column-inner">
                <h4 className="title">Most common type of issue title found:</h4>
                <span className="issue-title">{props.issue.title}</span>
            </div>
        </div>
    );
}

export default MostCommonIssue;
