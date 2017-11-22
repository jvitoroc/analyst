import React from "react";
import RepositorySearch from "./RepositorySearch";
import Header from "./Header";
import './assets/bootstrap.min.css';
import './assets/index.css';

export default function App(){
    return (
        <div className="app">
            <Header />
            <RepositorySearch maxReposLength={10} />
        </div>
    );
}
