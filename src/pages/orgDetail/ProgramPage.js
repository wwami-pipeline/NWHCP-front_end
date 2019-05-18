import React from 'react';
import Icon from '@material-ui/core/Icon';
import './programPage.css';

const ProgramPage = ({ program }) => {
  return (
    <div className='container programPage'>
      <div className="row">
        <div className="col s12 m7 l8">
          <div className='fullDesc'>
          <button className='primaryButton' onClick={() => {window.history.back()}}>Back</button>
          <h2>{program.OrgTitle}</h2>
          <hr/>
          <p>{program.ActivityDesc}</p>
          <ul class="browser-default">
              <li>Free Enrollment: {program.HasCost ? 'Yes' : 'No'}</li>
              <li>Youth Program: {program.Under18 ? 'Yes' : 'No'}</li>
              <li>Provides Transportation: {program.HasTransport ? 'Yes' : 'No'}</li>
              <li>Provides Shadowing Opportunities: {program.HasShadow ? 'Yes' : 'No'}</li>
          </ul>
        </div>
        </div>

        <div className="col s12 m5 l4">
        <div className='genInfo'>
          <div className='iconContent'>
            <Icon className='icon'>place</Icon>
            <div className='content'>
              {program.StreetAddress}
              <br />
              {program.City + 
              ", " + program.State +
              " " + program.ZipCode}
            </div>
          </div>
          <div className='iconContent'>
            <Icon className='icon'>phone</Icon>
            <div className='content'>
              {program.Phone}
            </div>
          </div>
          <div className='iconContent'>
            <Icon className='icon'>mail</Icon>
            <div className='content'>
              <a href={'mailto:' + program.Email} target="_top">{program.Email}</a>
            </div>
          </div>
          <div className='iconContent'>
            <Icon className='icon'>desktop_mac</Icon>
            <div className='content'>
              <a href={program.OrgWebsite} target='_blank'>Visit Program Website</a>
            </div>
          </div>
          </div>
        </div>
      </div>
      
     
    </div>

  )
}
 
export default ProgramPage;