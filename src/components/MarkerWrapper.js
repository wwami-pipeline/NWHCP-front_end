import React from 'react';
import { Marker, Popup} from 'react-leaflet';

const MarkerWrapper = (props) => {
  

  return (
    <div id={props.orgID + "icon"}>
      <Marker 
        className='test'
        position={props.position}
        onClick={() => props.onClick(props.orgID)}>
        <Popup>
          <span>
            {props.OrgTitle} <br /> More Info.
          </span>
        </Popup>
      </Marker>
    </div>
  );
}
 
export default MarkerWrapper;