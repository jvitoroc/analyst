import React from 'react';
import PropTypes from "prop-types";

function SearchBox(props){
    return(
        <div className="search-box container">
            <form onSubmit={props.getRepositories}>
                <div className="form-row">
                    <div className="col-9 col-sm-10">
                        <input type="text" onChange={props.handleChange} className="form-control" placeholder="Repository name"/>
                    </div>
                    <button type="submit" className="btn btn-primary col-3 col-sm-2">Search</button>
                </div>
            </form>
        </div>
    );
}

SearchBox.propTypes = {
    getRepositories: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchBox;
