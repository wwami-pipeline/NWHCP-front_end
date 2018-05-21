import React, { Component } from 'react';
import "../css/search.css";
import ProgramCard from "./ProgramCard";
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
    event.preventDefault();
    this.setState({filters: filters});
  }

  render() { 
    return (
      <div className="searchPage">
        <div className="filters">
          <FilterForm submit={this.submit} />
          <ul> 
            <li>location: {this.state.filters.location}</li>
            <li>CareerEmp: {this.state.filters.CareerEmp}</li>
            <li>HasCost: {this.state.filters.HasCost}</li>
            <li>Under18: {this.state.filters.Under18}</li>
            <li>HasTransport: {this.state.filters.HasTransport}</li>
            <li>HasCert: {this.state.filters.HasCert}</li>
            <li>GradeLevels: {this.state.filters.GradeLevels}</li>
          </ul>
        </div>
        <div className="results">
          {
            this.state.programs.map((program) =>  (
              <ProgramCard key={program.OrgID} program={program} />
            ))
          }
        </div>
      </div>
    )
  }
}
 
export default FindPrograms;