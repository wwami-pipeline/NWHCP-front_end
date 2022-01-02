/*
Program Card
Shows snippet of each program, as part of the list in "Find Programs"
 */
import React from "react";
import { Link } from "gatsby";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { prettyCareer } from "../../shared/filters";
// - Component to display an individual result card for program search.
// - Takes in a prop called program (JSON of health careepathway program info).
export default function ProgramCard({ program, onClick }) {
  // career emphasis
  const allCareers = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("career_emp"))
  );
  let careerEmphasis = [];
  Object.keys(allCareers).map(function (career) {
    if (allCareers[career] === "1") {
      careerEmphasis.push(prettyCareer[career.split("___")[1]]);
    }
  });
  const emphasisList = careerEmphasis.map((emphasis, index) => {
    return (
      <li key={"empahasis" + index} className="w-50">
        <span className="fa-li">
          <FontAwesomeIcon icon={faCheck} className="text-success" />
        </span>
        {emphasis}
      </li>
    );
  });
  return (
    <Container className="pb-3" id={program._id}>
      <Row>
        <Col xs={10}>
          <h4 className="text-left">
            {program.org_name || program.org_name_v2}
          </h4>
          <p>
            {program.street_address_1 || program.street_address_1_v2},
            {program.street_address_2 || program.street_address_2_v2}
            <br />
            {`${program.org_city || program.org_city_v2}, 
            ${program.org_state || program.org_state_v2}, 
            ${(program.zip_code || program.zip_code_v2).slice(0, 5)}`}
            <br />
            {program.org_phone_number || program.org_phone_number_v2}
          </p>
          <ul className="fa-ul d-flex flex-row flex-wrap">{emphasisList}</ul>
        </Col>
      </Row>
      <Button size="sm">
        <Link
          to={`/orgs/${program._id}`}
          state={program}
          className="text-white"
        >
          More Details
        </Link>
      </Button>
      <Button variant="link" size="sm" onClick={onClick} className="pl-2">
        Show on map
      </Button>
      <hr />
    </Container>
  );
}
