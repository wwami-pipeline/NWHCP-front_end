import React from 'react';
import "../css/programCard.css";

const ProgramCard = props => {
  return (
    <div id={props.program.OrgID} className={'programCard ' + (props.isActive? 'active':'')} onClick={props.onClick}>
      <h4>{props.program.OrgTitle}</h4>
        <div className='address'>
          {props.program.StreetAddress}
          <br />
          {props.program.City + 
          ", " + props.program.State +
          " " + props.program.ZipCode}
        </div>
        <a className="uw-btn btn-sm programButton" href={"/org" + props.program.OrgID}>More Details</a>
    </div>
  )
}
 
export default ProgramCard;