import React from 'react';
import PropTypes from "prop-types";
import Repository from '../components/Repository';

function RepositoryList(props){
    let renderRepos = ()=>{
        return props.repos.map((e, i)=>{
            return <Repository
                    full_name={e.full_name}
                    avatar_url={e.owner.avatar_url}
                    stars={e.stargazers_count}
                    issues={e.open_issues_count} key={i} />
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
