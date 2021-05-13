import React from "react";
import Search from "./Search";
import './Navbar.css';

// This is sets navbar with title and searchbar
function Navbar(props) {
  return (
    <nav className="navbar">
      <a className="navbar-brand">Employee Directory</a>
      <Search value={props.value}handleChange={props.handleChange}handleSubmit={props.handleSubmit}/>
    </nav>
  );
}

export default Navbar;
