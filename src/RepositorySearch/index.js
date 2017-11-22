import React from "react";
import View from "./View";
import getData from "./utils/getData";

export default class RepositorySearch extends React.Component{
    constructor(props){
        super(props);

        this.pullData = this.pullData.bind(this);
    }

    async pullData(query){
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
            <View pullData={this.pullData} {...this.state} />
        );
    }
}
