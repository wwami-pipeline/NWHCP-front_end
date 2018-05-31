import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "../css/mapTEST.css";
import ProgramCard from "./ProgramCard";
import SearchBox from './SearchBox';

class MapPageTest extends Component {
  constructor(props) {
    super(props);
    this.state =  { programs: [], activeID: '', location: '' };
    this.searchClick = this.searchClick.bind(this) 
    this.createMarkerIcon = this.createMarkerIcon.bind(this) 
  }

  componentWillMount() {
    fetch('http://nwhealthcareerpath.uw.edu/api/v1/orgs/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({location: "seattle, wa"})
    })
    .then(result => {return result.json()})
    .then(data => {
      console.log(data);
      this.setState({ programs: data, activeID: '', location: '' });
    });
  }

  handleClick(orgID) {
    this.setState({ activeID: orgID});
    var test = document.getElementById(orgID);
    var iconSelected = document.getElementsByClassName('icon' + orgID);
    iconSelected[0].click();
    console.log(iconSelected);
    test.scrollIntoView({
      behavior: 'smooth' 
    });
  }

  handleMarkerClick(orgID) {
    this.setState({ activeID: orgID});
    var test = document.getElementById(orgID);
    test.scrollIntoView({
      behavior: 'smooth' 
    });
  }

  searchClick(event, input) {
    event.preventDefault();
    console.log('click');
    var jsonFilters = JSON.stringify(input);
    console.log(jsonFilters);

    fetch('http://nwhealthcareerpath.uw.edu/api/v1/orgs/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonFilters
    })
    .then(result => {return result.json()})
    .then(data => { 
      this.setState({programs: data, location: input});
    });
  }

  createMarkerIcon(program) {
    var curIcon = new L.Icon({
      iconUrl: require('../marker.svg'),
      iconSize: new L.Point(30, 60),
      className: 'icon' + program.OrgID});
    return curIcon;
  }

  render() { 
    var position = this.state.programs[0] != null
      ? [this.state.programs[0].Lat, this.state.programs[0].Long] 
      : [47.649872200000004, -122.30822959999999];

    console.log(position);

    const Results = this.state.programs && this.state.programs.length == 0 ? (
      <h3 style = {{
          marginTop: 20,
          marginLeft: 30,
          fontSize: '1.7rem'
      }}>
          No Results
      </h3>
      ) : (
        this.state.programs.map((program) =>  (
          <ProgramCard 
            // eslint-disable-next-line
            isActive={program.OrgID==this.state.activeID} 
            key={program.OrgID} program={program} 
            onClick={() => this.handleClick(program.OrgID)} />
        ))
      );


    return (
      <div className="mapPage">
        <div className='sideBar'>
          <div className='seachBox'>
            <SearchBox searchClick={this.searchClick} name='Programs Near You' placeholder='Find a location' />
          </div>
          <div className="resultsBox">
            { Results }
          </div>
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
                    icon={this.createMarkerIcon(program)}
                    position={[program.Lat, program.Long]}
                    key={"marker" + program.OrgID}
                    onClick={() => this.handleMarkerClick(program.OrgID)}>
                    <Popup>
                      <span>
                        <h3>{program.OrgTitle}</h3>
                        <button className="programButton">
                          <a className='buttonLink' href={"/org" + program.OrgID}>More Details</a>
                        </button>
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