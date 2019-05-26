import React from 'react';
import Icon from '@material-ui/core/Icon';
import './programPage.css';
import {GradeLevels} from 'pages/Map/SearchBox/FilterForm'

class ProgramPage extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {program: props.program} 
  }

  getGradeLevel() {
    if (this.state.program.GradeLevels) {
      return this.state.program.GradeLevels.map(gradeID => GradeLevels[gradeID]['name']).join(", ")
    }
  }

  render() {
  return (
    <div className='container programPage'>
      <div className="row">
        <div className="col s12 m7 l8">
          <div className='fullDesc'>
          <a className='primaryButton' onClick={() => {window.close()}}>Back</a>
          <h2>{this.state.program.OrgTitle}</h2>
          <hr/>
          <p>{this.state.program.ActivityDesc}</p>
          <ul className="browser-default">
            <li>Career Emphasis: {this.state.program.CareerEmp ? this.state.program.CareerEmp.join(', ') : ''}</li>
            <li>Grade Level: {this.getGradeLevel()}</li>
            <li>Free Enrollment: {this.state.program.HasCost ? 'Yes' : 'No'}</li>
            <li>Provides Transportation: {this.state.program.HasTransport ? 'Yes' : 'No'}</li>
            <li>Provides Shadowing Opportunities: {this.state.program.HasShadow ? 'Yes' : 'No'}</li>
          </ul>
        </div>
        </div>

        <div className="col s12 m5 l4">
        <div className='genInfo'>
          <div className='iconContent'>
            <Icon className='icon'>place</Icon>
            <div className='content'>
              {this.state.program.StreetAddress}
              <br />
              {this.state.program.City + 
              ", " + this.state.program.State +
              " " + this.state.program.ZipCode}
            </div>
          </div>
          <div className='iconContent'>
            <Icon className='icon'>phone</Icon>
            <div className='content'>
              {this.state.program.Phone}
            </div>
          </div>
          <div className='iconContent'>
            <Icon className='icon'>mail</Icon>
            <div className='content'>
              <a href={'mailto:' + this.state.program.Email} target="_top">{this.state.program.Email}</a>
            </div>
          </div>
          <div className='iconContent'>
            <Icon className='icon'>desktop_mac</Icon>
            <div className='content'>
              <a href={this.state.program.OrgWebsite} target='_blank'>Visit Program Website</a>
            </div>
          </div>
          </div>
        </div>
      </div>
      
     
    </div>

    )
  }

}
 
export default ProgramPage;