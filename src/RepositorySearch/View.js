import React from "react";
import SearchInput from "./SearchInput";
import Loading from "./Loading";
import Message from "./Message";
import RepositoryList from "./RepositoryList";
import PropTypes from "prop-types";

function View(props){

    let render = ()=>{
        if(props.mounted)
            return <Message value={"Pick a repository"} />
        if(props.loading)
            return <Loading />
        else if(props.error)
            return <Message value={"An error occurred"} />
        else
            if(props.data.length !== 0)
                return <RepositoryList repos={props.data} />
            else
                return <Message value={"No repositories found"} />
    };

    return (
        <div className="main">
            <SearchInput onSearch={props.pullData}  />
            <div className="container">
                {render()}
            </div>
        </div>
    );
};

View.defaultProps = {
    mounted: true
}

View.propTypes = {
    mounted: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.array,
    onSearch: PropTypes.func.isRequired
}

export default View;
