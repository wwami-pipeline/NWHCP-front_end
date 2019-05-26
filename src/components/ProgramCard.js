import React from 'react';
import Icon from '@material-ui/core/Icon';
import "css/programCard.css";

const ProgramCard = props => {
  return (
    <div id={props.program.OrgId} className={'programCard ' + (props.isActive? 'active':'')} onClick={props.onClick}>
      <h4 className="orgTitle">{props.program.OrgTitle}</h4>
      <hr/>
      <div className='iconContent'>
        <Icon className='icon'>place</Icon>
        <div className='content'>
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
      <a className='primaryButton' target="_blank" href={"/org" + props.program.OrgId}>More Details</a>
    </div>
  )
}
 
export default ProgramCard;