import React from 'react';
import PropTypes from "prop-types"
import Message from "./Message";
import RepositoryList from "./RepositoryList";

function RepositoriesContainer({repos, loading, error, mounted, onClick}){
    console.log(mounted);
    if(mounted)
        return <Message value={"Pick a repository!"} />
    else if(error)
        return <Message value={error} />
    else if(repos.length !== 0)
        return <RepositoryList repos={repos} onClick={onClick}  />
    else
        return <Message value={"No repositories found!"} />
}

RepositoriesContainer.defaultProps = {
    mounted: true
}

RepositoriesContainer.propTypes = {
    repos: PropTypes.array,
    mounted: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.bool
};

export default RepositoriesContainer;
