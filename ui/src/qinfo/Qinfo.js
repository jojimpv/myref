import React, { Component } from 'react';
import SearchBar from './SearchBar'

class FileMatchDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.result.map((x) =>
            <div className="Qinfo-items">
                <div className="Qinfo-items-head">
                    {x.filename}
                </div>
                {x.matches.map((y) =>
                    <div className="Qinfo-items-content">
                        <div className="Qinfo-items-lno">{y.lno}</div>
                        <div className="Qinfo-items-txt"> {y.txt} </div>
                    </div>
                )}
            </div>
        );
        return (
            <div>
                {listItems.length > 0 ? listItems : null}
            </div>
        )        
    }
}

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
                response.json().then((resp) => {
                    this.setState({searchResult: resp.data.result})
                })
            }
        );
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <b>Qinfo</b>
            <SearchBar 
                txt={this.state.searchTxt}
                onUpdate={this.handleChange}
                onSubmit={this.handleSubmit}
            />
            <FileMatchDetails 
                result={this.state.searchResult}
            />
        </div>
        )
    }
}

export default Qinfo;