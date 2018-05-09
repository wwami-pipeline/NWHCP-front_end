import React, { Component } from 'react';
import ProgramPage from './ProgramPage.js';
import fullData from '../data/orgs.json';


class ProgramPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { program: []};
  }

  componentDidMount() {
    var orgID = this.props.match.params.id;
    // TODO: get org by id from DB save it to the state
    var org = fullData.filter(
      function(data){ return data.OrgID == orgID }
    );
    this.setState({ program: org[0] });
  }

  render() { 
    return (
      <div>
        <ProgramPage key={this.state.program.OrgID} program={this.state.program} />
      </div>
      
    )};
}
 
export default ProgramPageContainer;