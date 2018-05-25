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
    fetch('https://nwhealthcareerpath.uw.edu/api/v1/orgs/id/5b07461d26263d00018eaec5')
    .then(result => {console.log(result.json())});
    var org = fullData.filter(
      // eslint-disable-next-line
      function(data){ return data.OrgID == orgID }
    );
    
    org = org[0];
    var url = org.OrgWebsite;
    var updatedURL = url.includes('http') ? url : ('http://' + url);
    org.OrgWebsite = updatedURL;
    this.setState({ program: org });
  }

  render() { 
    return (
      <div>
        <ProgramPage key={this.state.program.OrgID} program={this.state.program} />
      </div>
      
    )};
}
 
export default ProgramPageContainer;