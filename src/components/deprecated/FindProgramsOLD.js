import React from "react";
import "../css/search.css";
import FilterForm from './FilterForm';

const Search = () => {
  return (
      <div className="searchPage">
        <div className="filters">
          <FilterForm />
        </div>
        <div className="results">
          <p>filter results go here</p>
        </div>
      </div>
    );
  };

export default Search;
