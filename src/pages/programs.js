/*
Programs
Overall layout of "Find Programs" page
Filters results
 */

import React, { useEffect, useState, useContext } from "react";
import ProgramCard from "../components/Programs/ProgramCard";
import Map from "../components/Programs/Map";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Context as AllProgramConText } from "../context/programContext";
import ProgramFilterSection from "../components/Programs/FilterSection";

// Page Component
const SearchPrograms = () => {
  const [centerLatLng, setCenterLatLng] = useState([47.6062, -122.3321]); // Seattle, WA
  const [markerRefs, setMarkerRef] = useState([]);
  const [bounds, setBounds] = useState([
    [47.51, -122.23],
    [47.71, -122.43],
  ]);

  const { fetchAllPrograms } = useContext(AllProgramConText);

  const programState = useContext(AllProgramConText).state;
  const filterProgram = programState.filteredProgram;
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    fetchAllPrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardClick = (program) => {
    // Show program on map
    setCenterLatLng(
      program?._id ? [program?.latitude, program?.longitude] : centerLatLng
    );
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
      <Grid></Grid>
      <ProgramFilterSection setBounds={setBounds} />
      <div className="mt-5">
        <h3 className="text-center text-primary mb-5">
          Found {filterProgram?.length} programs
        </h3>
      </div>
      <Grid container style={{ height: isMobile ? "auto" : "90vh" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{ 
            height: isMobile ? "300px" : "inherit",
            overflowY: "auto",
            overflowX: "hidden",
            order: isMobile ? 2 : 1,
            position: "relative"
          }}
        >
        <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
          {filterProgram?.length && <RenderPrograms programs={filterProgram} />}
          {!filterProgram.length && (
            <Typography>
              {" "}
              No program found. Please try different setting
            </Typography>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 56,
            pointerEvents: "none",
            background: "linear-gradient(to top, #fff 70%, rgba(255,255,255,0))",
          }}
        />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style = {{
            order: isMobile ? 1 : 2
          }}
        >
          <div>
            <Map
              programs={filterProgram}
              setCenter={setCenterLatLng}
              center={centerLatLng}
              markerRefs={markerRefs}
              bounds={bounds}
              setMarkerRef={setMarkerRef}
              mapHeight={isMobile ? "300px" : "90vh"}
              marginBtm={isMobile ? "20px" : "0px"}
            />
          </div>
        </Grid>
      </Grid>
      {isMobile && (
        <div
          style={{
            textAlign: "center",
            color: "#004987",
            fontWeight: 600,
            fontSize: 16,
            margin: "0 0 16px 0",
            letterSpacing: 0.5,
          }}
        >
          Scroll for more programs
        </div>
      )}
    </div>
  );
};
export default SearchPrograms;
