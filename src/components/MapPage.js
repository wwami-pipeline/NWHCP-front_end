import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "../css/map.css";
import ProgramCard from "./ProgramCard";
import SearchBox from './SearchBox';
import test from '../data/orgs.json';

class MapPageTest extends Component {
  constructor(props) {
    super(props);
    this.state =  { programs: [], activeID: '', location: '' };
    this.searchClick = this.searchClick.bind(this) 
  }

  componentWillMount() {
    fetch('https://nwhealthcareerpath.uw.edu/api/v1/orgs/')
    .then(result => {return result.json()})
    .then(data => {console.log(data)});
    this.setState({ programs: test, activeID: '', location: '' });
  }

  handleClick(orgID) {
    this.setState({ activeID: orgID});
    var test = document.getElementById(orgID);
    test.scrollIntoView({
      behavior: 'smooth'
    });
  }

  searchClick(event, input) {
    event.preventDefault();
    this.setState({location: input});
    console.log('click');
  }

  render() {
    const position = [47.649872200000004, -122.30822959999999];
    return (
      <div className="mapPage">
        <div className="seachBox">
          <SearchBox searchClick={this.searchClick} name='Programs Near You' placeholder='Find a location' />
        </div>
        <div className="resultsBox">
          {
            this.state.programs.map((program) =>  (
              <ProgramCard
                // eslint-disable-next-line
                isActive={program.OrgID==this.state.activeID}
                key={program.OrgID} program={program}
                onClick={() => this.handleClick(program.OrgID)} />
            ))
          }
        </div>
        <div className="mapBox">
          <Map center={position} zoom={12} className='map'>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {
                this.state.programs.map((program) =>  (
                  <Marker
                    className='test'
                    position={[program.Lat, program.Long]}
                    key={"marker" + program.OrgID}
                    onClick={() => this.handleClick(program.OrgID)}>
                    <Popup>
                      <span>
                        {program.OrgTitle} <br /> More Info.
                      </span>
                    </Popup>
                  </Marker>
                ))
              }
          </Map>
        </div>
      </div>
    )
  }
}

export default MapPageTest;
