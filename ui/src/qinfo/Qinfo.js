import React, { useState } from 'react';

function SearchInput({txt, handleChange, handleSubmit}) {
    return(
        <form className="Qinfo-search" onSubmit={handleSubmit}>
            <input className="Qinfo-input"
                type="text" 
                placeholder="search here..." 
                value={txt} 
                name="txt" 
                onChange={handleChange} 
            />
            <input type="submit" value="Search" />
        </form>
    );
}

function SearchResultDetails({item}) {
    return (
        <div className="Qinfo-items-content">
            <div className="Qinfo-items-lno">{item.lno}</div>
            <div className="Qinfo-items-txt"> {item.txt} </div>
        </div>
    )
}

function SearchResult({result}) {
    const resultItems = result.map((resultItem) =>
        <div className="Qinfo-items">
            <div className="Qinfo-items-head">
                {resultItem.filename}
            </div>
            <div>
                {resultItem.matches.map((resultItemMatch) => 
                    <SearchResultDetails item={resultItemMatch} />
                )}
            </div>
        </div>
    );
    return (
        <div>
            {resultItems.length > 0 ? resultItems : null}
        </div>
    )
}

function Qinfo(){
    const [state, setState] = useState({
        txt:'', 
        result:[]
    });

    const handleChange = (event) => {
        setState({...state, txt: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("api/qinfo/query"+'?txt='+state.txt).then((response) => {
                response.json().then((resp) => {
                    setState({...state, result: resp.data.result})
                })
            }
        );
    }

    return (
        <div>
            <div className="Qinfo-title">
                <b>Qinfo</b>
            </div>
            <SearchInput 
                txt={state.txt}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <SearchResult 
                result={state.result}
            />
        </div>
    )
}

export default Qinfo;