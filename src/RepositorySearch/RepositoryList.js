import React from 'react';
import PropTypes from "prop-types";
import Repository from './Repository';
import "./css/RepositoryList.css"

function RepositoryList(props){
    let renderRepos = ()=>{
        return props.repos.map((e, i)=>{
            return <Repository {...e} key={i} />
        });
    }
    return (
        <ul className="repository-list">
            {renderRepos()}
        </ul>
    );
}

RepositoryList.propTypes = {
    repos: PropTypes.array.isRequired
};

export default RepositoryList;
