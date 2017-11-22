import React from "react";
import PropTypes from "prop-types";

import RepositoryList from "./RepositoryList";
import AnalysisResult from "./AnalysisResult";
import Message from "../components/Message";
import Loading from "../components/Loading";

import {getAnalyzedData} from "../utils/analyze";

class RepositoriesContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showAnalysis: false,
            analysisData: null
        }

        this.analyzeRepo = this.analyzeRepo.bind(this);
    }

    analyzeRepo(fullname){
        let that = this;
        getAnalyzedData(fullname).then((response)=>{
            that.setState({showAnalysis: true, analysisData: response});
        }).catch((err)=>{
            that.setState({showAnalysis: true, analysisData: false});
        });
    }

    branchRender(){
        let data = this.props.data;

        if(data.status === 'loading')
            return <Loading />
        if(data.status === 'none' || data.status === 'error')
            return <Message value={"No repositories found!"} />
        if(data.status === 'mounted')
            return <Message value={"Pick a repository!"} />

        return <RepositoryList
                analyze={this.analyzeRepo}
                repos={data.repos} />
    };

    render(){
        return(
            <div className="repos container">
                {this.state.showAnalysis
                    ? <AnalysisResult data={this.state.analysisData} />
                    : this.branchRender()
                }
            </div>
        );
    }
}

RepositoriesContainer.propTypes = {
    data: PropTypes.object.isRequired
}

export default RepositoriesContainer;
