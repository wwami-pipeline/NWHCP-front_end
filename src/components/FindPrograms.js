import React, { Component } from 'react';
import "../css/findPrograms.css";
import ProgramCardVerbose from "./ProgramCardVerbose";
import FilterForm from './FilterForm';

class FindPrograms extends Component {
  constructor(props) {
    super(props);
    this.state =  { programs: [], filters: [] }; 
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    fetch('https://nwhealthcareerpath.uw.edu/api/v1/orgs/')
    .then(result => {return result.json()})
    .then(data => {
      this.setState({ programs: data, filters: [] });
    });
  }

  submit(event, filters) {
    event.preventDefault();
    var jsonFilters = JSON.stringify(filters);
    fetch('https://nwhealthcareerpath.uw.edu/api/v1/orgs/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonFilters
    })
    .then(result => {return result.json()})
    .then(data => { 
      this.setState({programs: data, filters: filters});
    });
   ;
  }

  render() { 
    return (
      <div className="searchPage">
        <div className="filters">
          <FilterForm submit={this.submit} />
        </div>
        <div className="results">
          {
            this.state.programs.map((program) =>  (
              <ProgramCardVerbose key={program.OrgID} program={program} />
            ))
          }
        </div>
      </div>
    )
  }
}
 
export default FindPrograms;