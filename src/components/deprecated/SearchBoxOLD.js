import React from 'react';
import '../css/searchBox.css';

const SearchBox = (props) => {
  return (
    <div className='searchBox'>
      <h2>{props.name}</h2>
      <input type="text" placeholder='Search'/>
      <button onClick={props.onClick} className='searchButton'>Search</button>
    </div>
  )
}
 
export default SearchBox;