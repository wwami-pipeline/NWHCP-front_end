/*
Programs
Overall layout of "Find Programs" page
Filters results
 */

import React, { useEffect, useState, useContext } from "react";
import ProgramCard from "../components/Programs/ProgramCard";
import Map from "../components/Programs/Map";
import { Grid, Typography } from '@mui/material'
import { Context as AllProgramConText } from "../context/programContext"
import ProgramFilterSection from "../components/Programs/FilterSection";

// Page Component
const SearchPrograms = () => {
  const [centerLatLng, setCenterLatLng] = useState([47.6062, -122.3321]); // Seattle, WA
  const [markerRefs, setMarkerRef] = useState([]);
  const [bounds, setBounds] = useState([
    [47.51, -122.23],
    [47.71, -122.43],
  ]);

  const {
    fetchAllPrograms,
  } = useContext(AllProgramConText);

  const programState = useContext(AllProgramConText).state;
  const filterProgram = programState.filteredProgram;

  useEffect(() => {
    fetchAllPrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCardClick = (program) => {
    // Show program on map
    setCenterLatLng(program?._id ? [program?.latitude, program?.longitude] : centerLatLng);
    var iconSelected = document.getElementsByClassName("marker" + program?._id);
    iconSelected[0].click();
  };

  const RenderPrograms = (props) => {
    return props.programs.map((program, index) => {
      return (
        <div key={"program" + index}>
          <ProgramCard
            program={program}
            onClick={() => handleCardClick(program)}
          />
        </div>
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Grid>
      </Grid>
      <ProgramFilterSection setBounds={setBounds} />
      <div className="mt-5">
        <h3 className="text-center text-primary mb-5">
          Found {filterProgram?.length} programs
        </h3>
        <button onClick={() => console.log(filterProgram)}>debug program</button>
      </div>
      <Grid container style={{ height: "90vh" }}>
        <Grid item xs={4} style={{ height: "inherit", overflowX: "hidden", }}>
          {filterProgram?.length && <RenderPrograms programs={filterProgram} />}
          {!filterProgram.length && <Typography> No program found. Please try different setting</Typography>}
        </Grid>
        <Grid item xs={8}>
          <div>
            <Map programs={filterProgram}
              setCenter={setCenterLatLng}
              center={centerLatLng}
              markerRefs={markerRefs}
              bounds={bounds}
              setMarkerRef={setMarkerRef} />
          </div>
        </Grid>
      </Grid>
    </div >
  );
};
export default SearchPrograms;
