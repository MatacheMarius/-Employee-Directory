import React from "react";
import Cards from "./Cards";
import search from "../utils/API";
import Navbar from "./Navbar";

class Employee extends React.Component {
  constructor(p) {
    super(p);
    this.state = {val: "",results: []};
    this.B = this.B.bind(this);
    this.A = this.A.bind(this);
    
  }
  A(e) {
    e.prevent();
    this.setState({val: "",});
  }
  componentDidMount() {
    this.API();
  }
  B(e) {
    this.setState({ val: e.target.val });
  }
  API = () => {
    search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };
  render() {
    let searchBarFilter = this.state.results.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1 ||
        employee.name.last.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1 ||
        employee.location.city.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1 ||
        employee.location.state.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1 ||
        employee.location.country.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1 ||
        employee.phone.toLowerCase().indexOf(this.state.val.toLowerCase()) !== -1
    );
    let table;
    if (this.state.val === "") {
      table = this.state.results;
    } else {
      table = searchBarFilter;
    }
    return (
      <div>
        <Navbar val={this.state.val}B={this.B}A={this.A}/>
        <div className="container-fluid">
    <Cards results={table}srt={this.state.srt}Srt={this.Srt}handleClose={this.handleClose}handleShow={this.handleShow}/>
        </div>
      </div>
    );
  }
}


export default Employee;
