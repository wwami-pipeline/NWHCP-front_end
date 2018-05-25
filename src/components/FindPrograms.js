import React, { Component } from 'react';
import "../css/findPrograms.css";
import ProgramCardVerbose from "./ProgramCardVerbose";
import FilterForm from './FilterForm';
import test from '../data/orgs.json';

class FindPrograms extends Component {
  constructor(props) {
    super(props);
    this.state =  { programs: [], filters: [] }; 
    this.submit = this.submit.bind(this)
  }

  componentWillMount() {
    this.setState({ programs: test, filters: [] });
  }

  submit(event, filters) {
    var jsonFilters = JSON.stringify(filters);
    console.log(jsonFilters);
    fetch('https://nwhealthcareerpath.uw.edu/api/v1/orgs/', {
      method: "POST",
      parameters: jsonFilters
    }).then(result => {console.log(result)})
    event.preventDefault();
    this.setState({filters: filters});
    console.log(filters);
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