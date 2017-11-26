import React from "react";

function MostCommonIssue ({titleInfo}){
    return (
        <div className="col-6 analyze-column-inner">
        <h4>The most common kind of issue found:</h4>
        {titleInfo.title}
        </div>
    );
}

export default MostCommonIssue;
