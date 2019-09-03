import React, { Component } from 'react';
import SearchBar from './SearchBar'

class Qinfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTxt:'',
            searchResult: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({searchTxt: event.target.value})
    }

    handleSubmit(event){
        fetch("api/qinfo/query"+'?txt='+this.state.searchTxt).then((response) => {
                console.log(response);
                response.json().then((resp) => {
                    console.log(this)
                    this.setState({searchResult: resp.data.result})
                })
            }
        );
        event.preventDefault();
    }

    render() {
        const listItems = this.state.searchResult.map((x) => <li>{x}</li>);
        return (
        <div>
            <b>Qinfo</b>
            <SearchBar 
                txt={this.state.searchTxt} 
                result={this.state.searchResult}
                onUpdate={this.handleChange}
                onSubmit={this.handleSubmit}
            ></SearchBar>
            {listItems.length > 0 ? <ol>{listItems}</ol> : null} 
        </div>
        )
    }
}

export default Qinfo;