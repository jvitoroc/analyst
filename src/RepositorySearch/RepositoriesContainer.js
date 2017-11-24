import React from 'react';
import PropTypes from "prop-types";
import Loading from "./Loading";
import Message from "./Message";
import RepositoryList from "./RepositoryList";

function RepositoriesContainer({data, loading, error, mounted}){

    let render = ()=>{
        if(mounted)
            return <Message value={"Pick a repository!"} />
        else if(error)
            return <Message value={"An error occurred!"} />
        else if(data.length !== 0)
            return <RepositoryList repos={data} />
        else
            return <Message value={"No repositories found!"} />
    };

    return (
        <div>
            {loading
                ? null
                : render()
            }
            <Loading state={loading} />
        </div>
    );
}

RepositoriesContainer.defaultProps = {
    mounted: true
}

RepositoriesContainer.propTypes = {
    data: PropTypes.array,
    mounted: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.bool
};

export default RepositoriesContainer;
