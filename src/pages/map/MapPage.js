import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "./map.css";
import ProgramCard from "components/ProgramCard";
import SearchBox from './SearchBox/SearchBox';
import M from "materialize-css";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state =  { programs: [], activeID: '', searchContent: '' };
    this.searchClick = this.searchClick.bind(this) 
    this.createMarkerIcon = this.createMarkerIcon.bind(this) 
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.collapsible');
    const options = {}
    M.Collapsible.init(elems, options);
  }

  componentWillMount() {
    fetch(process.env.REACT_APP_API_ENDPOINT+'/api/v1/search', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(result => {return result.json()})
    .then(data => {
      // console.log(data);
      this.setState({ programs: data, activeID: '', searchContent: '' });
    });
  }

  handleClick(OrgId) {
    this.setState({ activeID: OrgId});
    var test = document.getElementById(OrgId);
    var iconSelected = document.getElementsByClassName('icon' + OrgId);
    iconSelected[0].click();
    // console.log(iconSelected);
    test.scrollIntoView({
      behavior: 'smooth' 
    });
  }

  handleMarkerClick(OrgId) {
    this.setState({ activeID: OrgId});
    var test = document.getElementById(OrgId);
    test.scrollIntoView({
      behavior: 'smooth' 
    });
  }

  searchClick(event, input) {
    var elems = document.querySelectorAll('.collapsible');
    elems.forEach(elem => {
      M.Collapsible.getInstance(elem).close()
    })
    event.preventDefault();
    // console.log('click');
    var jsonFilters = JSON.stringify(input);
    // console.log(jsonFilters);

    fetch(process.env.REACT_APP_API_ENDPOINT+'/api/v1/search', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonFilters
    })
    .then(result => {return result.json()})
    .then(data => { 
      this.setState({programs: data, searchContent: input});
    });
  }

  createMarkerIcon(program) {
    var curIcon = new L.Icon({
      iconUrl: require('marker.svg'),
      iconSize: new L.Point(30, 60),
      className: 'icon' + program.OrgId});
    return curIcon;
  }

  render() { 

    let minLat = 180, maxLat = -180
    let minLng = 180, maxLng = -180
    this.state.programs.forEach(program => {
      let lat = program["Lat"]
      let lng = program["Long"]
      if (lat < minLat) {
        minLat = lat
      }
      if (lat > maxLat) {
        maxLat = lat
      }
      if (lng < minLng) {
        minLng = lng
      }
      if (lng > maxLng) {
        maxLng = lng
      }
    })
    // console.log(minLat, maxLat, minLng, maxLng)

    var centerLatLng = [(minLat+maxLat)/2, (minLng+maxLng)/2]
    if (minLat == maxLat || minLng == maxLng) {
      const adjustDegree = 0.05
      minLat -= adjustDegree
      minLng -= adjustDegree
      maxLat += adjustDegree
      maxLng += adjustDegree
    }
    let bounds = [[minLat, minLng], [maxLat, maxLng]]
    // console.log(bounds)
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
            isActive={program.OrgId==this.state.activeID} 
            key={program.OrgId} program={program} 
            onClick={() => this.handleClick(program.OrgId)} />
        ))
      );
      

    return (
      <React.Fragment>
      <SearchBox searchClick={this.searchClick} placeholder='Location/Institution' />

      <div className="mapPage">
        <div className='sideBar'>
          <div className="resultsBox">
            { Results }
          </div>
        </div>
        <div className="mapBox">
          <Map center={centerLatLng} bounds={bounds} boundsOptions={{padding: [20, 20]}} className='map'>
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
                    key={"marker" + program.OrgId}
                    onClick={() => this.handleMarkerClick(program.OrgId)}>
                    <Popup>
                      <span>
                        <h3>{program.OrgTitle}</h3>
                        <a className='markerButton primaryButton' target="_blank" href={"/org" + program.OrgId}>More Details</a>
                      </span>
                    </Popup>
                  </Marker>
                ))
              }
          </Map>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
 
export default MapPage;