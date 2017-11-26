import React from "react";
import View from "./View";
import getRepos from "./utils/getRepos";
import getIssues from "./utils/getIssues";
import getAnalysis from "./utils/analyze";

export default class RepositorySearch extends React.Component{
    constructor(props){
        super(props);

        this.pullRepos = this.pullRepos.bind(this);
        this.pullIssues = this.pullIssues.bind(this);
    }

    async pullRepos(query){
        try{
            this.setState({loading: true, error: false, mounted: false, analysis: null});
            let repos = await getRepos(query, this.props.maxReposLength);
            this.setState({loading: false, repos});
        }catch(rejected){
            this.setState({loading: false, error: "An error occured", repos: true});
        }
    }

    async pullIssues(query){
        try{
            this.setState({loading: true, error: false, repos: null});
            let issues = await getIssues(query);
            let analysis;
            if(issues.length > 0)
                analysis = getAnalysis(issues);
            else
                throw new Error("none");
            console.log(analysis);
            this.setState({loading: false, analysis: analysis});
        }catch(rejected){
            let errorMessage = "An error occured";
            if(rejected.message === "none")
                errorMessage = "No issues found there!"
            this.setState({loading: false, error: errorMessage, analysis: true});
        }
    }

    render(){
        return <View pullRepos={this.pullRepos} pullIssues={this.pullIssues} {...this.state} />
    }
};
