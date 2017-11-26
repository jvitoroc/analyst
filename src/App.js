import React from "react";
import APISearch from "./APISearch";
import Header from "./Header";
import './css/bootstrap.min.css';
import './css/index.css';

export default function App(){
    return (
        <div className="app">
            <Header />
            <APISearch maxReposLength={10} />
        </div>
    );
}
