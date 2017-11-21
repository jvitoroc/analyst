import React from 'react';
import PropTypes from "prop-types";

function Repository(props){
    return(
        <li className="repository container">
            <div className="row">
                <div className="avatar col-12 col-sm-2 d-flex align-items-center"><img className="img-fluid" src={props.avatar_url} alt={props.full_name}/></div>
                <div className="desc col-12 col-sm-10">
                    <h3 className="title">{props.full_name}</h3>
                    <div className="info">
                        <span className="stars"><span className="hightlight">Stars:</span> {props.stars}</span><br/>
                        <span className="issues"><span className="hightlight">Issues:</span> {props.issues}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

Repository.propTypes = {
    full_name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    stars: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    issues: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};


export default Repository;
