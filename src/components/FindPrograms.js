import React, { Component } from 'react';
import "../css/search.css";
import ProgramCardVerbose from "./ProgramCardVerbose";
import FilterForm from './FilterFormTEST';
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