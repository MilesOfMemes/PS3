import React from 'react';
import faker from 'faker';

function SearchBar(props){
    function onChangeHandle(e){
        props.searchContacts(e.target.value);
    }
    return  <input type="text" onChange={(e) => onChangeHandle(e)}/>;
}




export default SearchBar;