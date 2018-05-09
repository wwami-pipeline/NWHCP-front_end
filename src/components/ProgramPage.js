import React from 'react';
import '../css/programPage.css';

const ProgramPage = ({ program }) => {
  return (
    <div className='programPage'>
      <div className='genInfo'>
        stuff here
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