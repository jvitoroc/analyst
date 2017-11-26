import React from "react";
import RepositoryList from "./RepositoryList";
import Message from "./Message";

function View({pullIssues, error, data, mounted}){
    if(error)
        return <Message value={error} />
    else if(data.length !== 0)
        return <RepositoryList repos={data} onClick={pullIssues}  />
    else
        return <Message value={"No repositories found!"} />
};

export default View;
