import React from "react";
import SearchInput from "./SearchInput";
import RepositoriesContainer from "./RepositoriesContainer";
import PropTypes from "prop-types";
import IssuesAnalysis from "../IssuesAnalysis";
import Loading from "./Loading";

function View({pullRepos, pullIssues, loading, repos, analysis, mounted, ...otherProps}){
    let render = ()=>{
        if(repos || mounted){
            return <RepositoriesContainer
                    {...otherProps}
                    mounted={mounted}
                    repos={repos}
                    onClick={pullIssues} />

        }else if(analysis){
            return <IssuesAnalysis
                    {...otherProps}
                    analysis={analysis} />
        }
    };

    return (
        <div className="main">
            <SearchInput onSearch={pullRepos} />
            <div className="container">
                {loading
                    ? null
                    : render()
                }
                <Loading state={loading} />
            </div>
        </div>
    );
};

View.defaultProps = {
    mounted: true
}

View.propTypes = {
    mounted: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    repos: PropTypes.array,
    pullData: PropTypes.func
}

export default View;
