import React, { Component } from 'react';
import ProgramPage from './ProgramPage.js';


class ProgramPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { program: []};
  }

  componentDidMount() {
    var orgID = this.props.match.params.id;
    fetch('https://nwhealthcareerpath.uw.edu/api/v1/orgs/id/' + orgID)
    .then(result => {return result.json()})
    .then(org => {
      var url = org.OrgWebsite;
      var updatedURL = url.includes('http') ? url : ('http://' + url);
      org.OrgWebsite = updatedURL;
      this.setState({ program: org });
    });
  }

  render() { 
    return (
      <div>
        <ProgramPage key={this.state.program.OrgID} program={this.state.program} />
      </div>
      
    )};
}
 
export default ProgramPageContainer;