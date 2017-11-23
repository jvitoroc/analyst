import React from "react";
import SearchInput from "./SearchInput";
import Loading from "./Loading";
import Message from "./Message";
import RepositoryList from "./RepositoryList";
import PropTypes from "prop-types";
import classnames from "classnames";

function View(props){

    let render = ()=>{
        if(props.mounted)
            return <Message value={"Pick a repository!"} />
        else if(props.error)
            return <Message value={"An error occurred!"} />
        else
            if(props.data.length !== 0)
                return <RepositoryList repos={props.data} />
            else
                return <Message value={"No repositories found!"} />
    };

    return (
        <div className="main">
            <SearchInput onSearch={props.pullData}  />
            <div className="container">
                {props.loading
                    ? null
                    : render()
                }
                <Loading hidden={classnames({hidden: !props.loading})} />
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
    pullData: PropTypes.func.isRequired
}

export default View;
