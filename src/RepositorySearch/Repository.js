import React from 'react';
import PropTypes from "prop-types";

function Repository(props){
    return(
        <li className="repository container">
            <div className="row">
                <div className="avatar col-12 col-sm-2 d-flex align-items-center"><img className="img-fluid" src={props.avatarUrl} alt={props.name}/></div>
                <div className="desc col-12 col-sm-10">
                    <h3 className="title">{props.name}</h3>
                    <div className="info">
                        <span className="stars"><span className="hightlight">Stars:</span> {props.starsCount}</span><br/>
                        <span className="issues"><span className="hightlight">Issues:</span> {props.issuesCount}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    starsCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    issuesCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};


export default Repository;
