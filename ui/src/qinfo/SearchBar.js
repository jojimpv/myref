import React, { Component } from 'react';

// function searchTxt(txt) {
//     console.log(txt)
// }

class SearchBar extends Component {
    render(){
        return(
            <form className="Qinfo-search" action="api/qinfo/query">
                <input type="text" name="txt" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SearchBar;
