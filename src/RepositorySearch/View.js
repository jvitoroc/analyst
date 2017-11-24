import React from "react";
import SearchInput from "./SearchInput";
import RepositoriesContainer from "./RepositoriesContainer";
import PropTypes from "prop-types";

function View({pullData, ...otherProps}){
    return (
        <div className="main">
            <SearchInput onSearch={pullData}  />
            <div className="container">
                <RepositoriesContainer {...otherProps} />
            </div>
        </div>
    );
};

View.propTypes = {
    mounted: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.array,
    pullData: PropTypes.func
}

export default View;
