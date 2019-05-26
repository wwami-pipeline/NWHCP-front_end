import React, { Component } from 'react';
import ProgramPage from './ProgramPage.js';


class ProgramPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { program: []};
  }

  componentDidMount() {
    var OrgId = this.props.match.params.id;
    // console.log(this.props)
    fetch(process.env.REACT_APP_API_ENDPOINT+'/api/v1/org/' + OrgId)
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
        <ProgramPage key={this.state.program.OrgId} program={this.state.program} />
      </div>
      
    )};
}
 
export default ProgramPageContainer;