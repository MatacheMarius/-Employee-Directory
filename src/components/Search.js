import React from "react";
import './Search.css';


function Search(props) {
  return (
    <div>
      <form className="Search-inline">
        <input
          className="Search-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.value}
          name="search"
          onChange={props.handleChange}
        />
        <button
          className="btn-sm"
          type="submit"
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
