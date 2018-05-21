import React from "react";
import "../css/map.css";
import ProgramCardContainer from "./ProgramCardContainer";
import SearchBox from './SearchBox';
import image from '../imgs/mapPlaceholder.png';

const MapPage = () => {
  return (
    <div className="mapPage">
      <div className="seachBox">
        <SearchBox name='Programs Near You' />
      </div>
      <div className="resultsBox">
        <ProgramCardContainer />
      </div>
      <div className="mapBox">
        <img src={image} alt="map of programs"/>
      </div>
    </div>
  );
};

export default MapPage;