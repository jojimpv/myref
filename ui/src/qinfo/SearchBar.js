import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form className="Qinfo-search" onSubmit={this.props.onSubmit}>
                <input type="text" name="txt" value={this.props.txt} onChange={this.props.onUpdate} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SearchBar;
