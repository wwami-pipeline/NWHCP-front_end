import React from 'react';
import '../css/programPage.css';

const ProgramPage = ({ program }) => {
  return (
    <div className='programPage'>
      <div className='genInfo'>
        <ul>
          <li>
            {program.StreetAddress}
            <br />
            {program.City + ", " + program.State + " " + program.ZipCode}
          </li>
          <li>{program.Phone}</li>
          <li>{program.Email}</li>
          <li>{program.OrgWebsite}</li>
        </ul>
      </div>
      <div className='fullDesc'>
        <h3>{program.OrgTitle}</h3>
        <hr/>
        <p>{program.ActivityDesc}</p>
      </div>
    </div>

  )
}
 
export default ProgramPage;