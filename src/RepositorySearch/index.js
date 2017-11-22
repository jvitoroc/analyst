import React from "react";
import View from "./View";
import getData from "./getData";

export default class extends React.Component{
    constructor(props){
        super(props);

        this.load = this.load.bind(this);
    }

    async load(query){
        try{
            this.setState({loading: true, error: false, mounted: false});
            let data = await getData(query, this.props.maxReposLength);
            this.setState({loading: false, data, mounted: false});
        }catch(rejected){
            this.setState({loading: false, error: true, mounted: false});
        }
    }

    render(){
        return(
            <View onSearch={this.load} {...this.state} />
        );
    }
}
