import React from 'react';
import Icon from '@material-ui/core/Icon';
import "../css/programCard.css";

const ProgramCard = props => {
  var partialText = props.program.ActivityDesc;
  partialText = partialText.substring(0, 180);
  partialText = partialText + " ...";
  return (
    <div id={props.program.OrgId} className={'programCard ' + (props.isActive? 'active':'')} onClick={props.onClick}>
      <h4>{props.program.OrgTitle}</h4>
      <hr/>
      <div className='summary'>{partialText}</div>
      <div className='iconContent'>
        <Icon className='icon'>place</Icon>
        <div className='verboseContent'>
          {props.program.StreetAddress}
          <br />
          {props.program.City + 
          ", " + props.program.State +
          " " + props.program.ZipCode}
        </div>
      </div>
      <div className='iconContent'>
        <Icon className='icon'>phone</Icon>
        <div className='content'>
          {props.program.Phone}
        </div>
      </div>
      <button className="programButton">
        <a className='buttonLink' href={"/org" + props.program.OrgId}>More Details</a>
      </button>
    </div>
  )
}
 
export default ProgramCard;