import React from "react";
import PropTypes from "prop-types";

import RepositoryList from "./RepositoryList";
import Message from "../components/Message";
import Loading from "../components/Loading";

class RepositoriesContainer extends React.Component{

    branchRender(){
        let data = this.props.data;

        if(data.status === 'loading')
            return <Loading />
        if(data.status === 'none' || data.status === 'error')
            return <Message value={"No repositories found!"} />
        if(data.status === 'mounted')
            return <Message value={"Pick a repository!"} />

        return <RepositoryList
                analyze={this.props.analyzeRepo}
                repos={data.repos} />
    };

    render(){
        return(
            <div className="repos container">
                {this.branchRender()}
            </div>
        );
    }
}

RepositoriesContainer.propTypes = {
    data: PropTypes.object.isRequired
}

export default RepositoriesContainer;
