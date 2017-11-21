import React from 'react';
import PropTypes from "prop-types";
import Repository from '../components/Repository';

function RepositoryList(props){
    let renderRepos = ()=>{
        return props.repos.map((e, i)=>{
            let avatar_url = "https://help.github.com/assets/images/help/profile/identicon.png";
            if(e.owner !== null){
                 avatar_url = e.owner.avatar_url;
            }
            return <Repository
                    onClick={()=> props.analyze(e.full_name)}
                    full_name={e.full_name}
                    avatar_url={avatar_url}
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
