import React, { Component } from 'react';
import ProgramCard from './ProgramCard.js';
import test from '../data/orgs.json'


class ProgramCardContainer extends Component {
  constructor() {
    super();
    this.state = { programs: [] };
  }

  componentWillMount() {
    this.setState({ programs: test });
  }

  render() { 
    return this.state.programs.map((program) =>  (
      <ProgramCard key={program.OrgID} program={program} />
    ))};
}
 
export default ProgramCardContainer;