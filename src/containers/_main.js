import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import RepositoriesContainer from './RepositoriesContainer';
import SearchBox from '../components/SearchBox';
import Header from "../components/Header";

import extractValue from "../utils/extractValue";

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: '',
            data: {
                status: 'mounted',
                repos: null
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.getRepositories = this.getRepositories.bind(this);
        this.repositoriesReceivedHandler = this.repositoriesReceivedHandler.bind(this);
        this.repositoriesErrorHandler = this.repositoriesErrorHandler.bind(this);
    }

    getRepositories(e){ //Get 10 repositories from GitHub
        this.setState({data: {status: 'loading', repos: null}});

        let url = `https://api.github.com/search/repositories?` +
                    `q=${this.state.value}&` +
                    `per_page=${this.props.repositoryListLength}&` +
                    `client_id=085153c53d393d9f0d9c`;

        axios.get(url)
        .then(this.repositoriesReceivedHandler)
        .catch(this.repositoriesErrorHandler);

        e.preventDefault();
        return false;
    }

    repositoriesReceivedHandler(response){
        if(response.data.total_count && response.data.total_count !== 0)
            this.setState({data: {
                    status: 'success',
                    repos: response.data.items
                }
            });
        else
            this.setState({data: {
                    status: 'none',
                    repos: null
                }
            });
    }

    repositoriesErrorHandler(err){
        // treat error
        this.setState({data: {
                status: 'error',
                repos: null
            }
        });
    }

    handleChange(e){ //Get the value (name of repository) from the input-text
      this.setState({value: extractValue(e.target.value)});
    }

    render(){
        return(
            <div className="wrap">
                <Header />

                <SearchBox
                handleClick={this.getRepositories}
                handleChange={this.handleChange} />

                <RepositoriesContainer data={this.state.data} />
            </div>
        );
    }
}

Main.propTypes = {
    repositoryListLength: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Main;
