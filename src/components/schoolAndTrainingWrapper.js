import { Grid } from "@mui/material";
import React from "react";
import PathwayDropdown from "./PathwayDropdown";

export default function SchoolAndTrainingWrapper() {
  return (
    <>
      {/* Path */}
      <PathwayDropdown level={0} title={"Examples"}>
        <Grid>
          <li>Academic Health Professions Schools</li>
          <li>Health Professions Training Program Sites (for credit)</li>
          <li>Competency-based Training Program</li>
          <li>Career Technical Education Centers</li>
          <li>Interprofessional Education Training Centers</li>
          <li>Apprenticeship Programs</li>
        </Grid>
      </PathwayDropdown>
    </>
  );
}
