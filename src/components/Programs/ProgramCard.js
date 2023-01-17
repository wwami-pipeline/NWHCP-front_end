/*
Program Card
Shows snippet of each program in the search results 
 */
import React, { useState } from "react";
import { Link } from "gatsby";
import { Grid, Typography, Button, Collapse } from "@mui/material"
import { Button as BootstrapBTN, Container } from "react-bootstrap";
import { prettyCareer } from "../../shared/filters";
// - Component to display an individual result card for program search.
// - Takes in a prop called program (JSON of health careepathway program info).
export default function ProgramCard({ program, onClick }) {
  const [openMore, setOpenMore] = useState(false);

  // career emphasis
  const allCareers = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("career_emp"))
  );
  let careerEmphasis = [];
  Object.keys(allCareers).forEach(function (career) {
    if (allCareers[career] === "1") {
      careerEmphasis.push(prettyCareer[career.split("___")[1]]);
    }
  });
  const emphasisList = careerEmphasis.map((emphasis, index) => {
    return (
      <Grid item key={index} style={{ margin: 2, padding: "3px 8px", border: "1px solid #004987", borderRadius: 8 }}>
        <Grid container alignContent={"center"}>
          <Typography variant='caption'>
            {emphasis}
          </Typography>
        </Grid>
      </Grid >
    );
  });
  return (
    <Container className="pb-3" id={program._id}>
      <Grid>
        <h4 className="text-left">
          {program.org_name || program.org_name_v2}
        </h4>
        <Typography variant="body1" inline="true">
          {!openMore ? program?.description.slice(0, 80) + "..." : ""}
        </Typography>
        <Collapse in={openMore}>
          <Typography inline="true" variant="body1">{program?.description}</Typography>
        </Collapse>
        <Grid container justifyContent={"right"}>
          <Button variant="text" style={{ paddingRight: 0 }} onClick={() => setOpenMore(!openMore)}>
            <Typography>{openMore ? "Close 🔼" : "Read more 🔽"}</Typography>
          </Button>
        </Grid>
        <Typography variant="body2">
          {`${program.org_city || program.org_city_v2}, 
            ${program.org_state || program.org_state_v2}, 
            ${(program.zip_code || program.zip_code_v2).slice(0, 5)}`}
          <br />
          {program.org_phone_number || program.org_phone_number_v2}
        </Typography>
        <Grid container style={{ marginTop: 10, marginBottom: 10 }}>{emphasisList}</Grid>
      </Grid>
      <BootstrapBTN size="sm">
        <Link
          to={`/orgs/${program._id}`}
          state={program}
          className="text-white"
        >
          More Details
        </Link>
      </BootstrapBTN>
      <BootstrapBTN variant="link" size="sm" onClick={onClick} className="pl-2">
        Show on map
      </BootstrapBTN>
      <hr />
    </Container>
  );
}
