import React from "react";
import RepositorySearch from "./RepositorySearch";
import Header from "./Header";
import './css/bootstrap.min.css';
import './css/index.css';

export default function App(){
    return (
        <div className="app">
            <Header />
            <RepositorySearch maxReposLength={10} />
        </div>
    );
}
