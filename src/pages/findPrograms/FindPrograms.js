import React, { Component } from 'react';
import "css/findPrograms.css";
import ProgramCardVerbose from "components/ProgramCardVerbose";
import FilterForm from './FilterForm';

class FindPrograms extends Component {
  constructor(props) {
    super(props);
    this.state =  { programs: [], filters: [] }; 
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_ENDPOINT+'/api/v1/orgs')
    .then(result => {return result.json()})
    .then(data => {
      this.setState({ programs: data, filters: [] });
    });
  }

  submit(event, filters) {
    event.preventDefault();
    var jsonFilters = JSON.stringify(filters);
    console.log(jsonFilters);
    
    fetch(process.env.REACT_APP_API_ENDPOINT+'/api/v1/search', {
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
  }

  render() { 
    const Results = this.state.programs && this.state.programs.length == 0 ? (
      <h3 style = {{
          marginTop: 15,
          marginLeft: 30,
          fontSize: '1.7rem'
      }}>
          No Results
      </h3>
      ) : (
        this.state.programs.map((program) =>  (
          <ProgramCardVerbose key={program.OrgID} program={program} />
        ))
      );
    return (
      
      <div className="searchPage">
        <div className="filters">
          <FilterForm submit={this.submit} />
        </div>
        <div className="results">
          { Results }
        </div>
      </div>
    )
  }
}
 
export default FindPrograms;