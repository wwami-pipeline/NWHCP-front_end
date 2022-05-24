/*
Program Details
"More Details" page
 */
import React from "react";
import { Link } from "gatsby";
import { Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronLeft,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../scss/program-details.scss";
import {
  prettyCareer,
  prettyGrade,
  prettyPathway,
} from "../../shared/filters.js";

const ProgramDetails = (props) => {
  const validateUrl = (url) => {
    let valid = /^(ftp|http|https):\/\//.test(url);
    return valid ? url : "http://" + url;
  };
  if (props.location.state === undefined) {
    return null;
  }
  const program = {
    ...props.location.state,
    OrgWebsite: validateUrl(props.location.state.OrgWebsite),
    eligibilityRequirements: ["one", "two"],
    targetPopulation: ["one", "two"],
    other: ["one", "two"],
  };
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
  // education levels
  const allGrades = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("target_school_age"))
  );
  let gradeLevel = [];
  Object.keys(allGrades).map(function (grade) {
    if (allGrades[grade] === "1") {
      gradeLevel.push(prettyGrade[grade.split("___")[1]]);
    }
  });
  const gradeList = gradeLevel.map((grade, index) => {
    return (
      <li key={index} className="w-50">
        <span className="fa-li">
          <FontAwesomeIcon icon={faCheck} className="text-success" />
        </span>
        {grade}
      </li>
    );
  });
  // program type
  const allPathways = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("pathway_type"))
  );
  let pathways = [];
  Object.keys(allPathways).map(function (type) {
    if (allPathways[type] === "1") {
      pathways.push(prettyPathway[type.split("___")[1]]);
    }
  });
  const pathwaysList = pathways.map((type, index) => {
    return (
      <li key={index} className="w-50">
        <span className="fa-li">
          <FontAwesomeIcon icon={faCheck} className="text-success" />
        </span>
        {type}
      </li>
    );
  });

  // academic credits
  const allAcadCreds = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("academic_credit"))
  );
  let hasAcadCred = "No";
  Object.keys(allAcadCreds).map(function (entry) {
    if (allAcadCreds[entry] === "1") {
      hasAcadCred = "Yes";
    }
  });
  // age requirements
  const allAgeReqs = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("age_requirement"))
  );
  let ageReq = "No";
  Object.keys(allAgeReqs).map(function (entry) {
    if (allAgeReqs[entry] === "1") {
      ageReq = entry.match("___(.*)")[1];
    }
  });
  // certificates
  const allCerts = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("certificate_title"))
  );
  let certString = "NA";
  Object.keys(allCerts).map(function (entry) {
    if (allCerts[entry] !== "") {
      certString = allCerts[entry];
    }
  });

  console.log(program)

  // render page
  return (
    <div className="page-wrapper">
      {/*back to search results*/}
      <Link to="/programs">
        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
        Search Results
      </Link>
      {/*name*/}
      <h3 className="text-primary mt-4 mb-3">
        {program.org_name || program.org_name_v2}
      </h3>
      {/*description*/}
      <p>{program.description}</p>
      {/*program type*/}
      <h4>Program Type</h4>
      <ul className="fa-ul d-flex flex-row flex-wrap">{pathwaysList}</ul>
      {/*career emphasis*/}
      <h4>Career Emphasis</h4>
      <ul className="fa-ul d-flex flex-row flex-wrap">{emphasisList}</ul>
      {/*grade level*/}
      <h4>Education Levels</h4>
      <ul className="fa-ul d-flex flex-row flex-wrap">{gradeList}</ul>
      {/*academic credit*/}
      <h4>Academic Credit: {hasAcadCred}</h4>
      {/*Age Requirement*/}
      <h4>Age Requirement: {ageReq}</h4>
      {/*Certificates*/}
      <h4>Certificates Offered: {certString}</h4>
      {/*visit program website*/}
      <Button variant="primary" block className="my-4">
        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
        <a
          href={program.org_website || program.org_website_v2}
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          Visit Program Website
        </a>
      </Button>
      <Accordion>
        <Accordion.Toggle as="h4" eventkey="0">
          <div>
            Contact Information
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </div>
        </Accordion.Toggle>
        <Accordion eventkey="0">
          <ul id="contact-information" className="fa-ul contact-info">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <a
                href={program.org_website || program.org_website_v2}
                target="_blank"
                rel="noreferrer"
              >
                {program.org_website || program.org_website_v2}
              </a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href={`mailto:${program.org_email || program.org_email_v2}`}>
                {program.org_email || program.org_email_v2}
              </a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <a
                href={
                  "tel:+1" +
                  (
                    program.org_phone_number || program.org_phone_number_v2
                  ).match(/\d+/g)
                }
              >
                {program.org_phone_number}
                {program.org_phone_number_v2}
              </a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              {program.street_address_1 || program.street_address_1_v2},{" "}
              {program.street_address_2 || program.street_address_2_v2},{" "}
              {program.org_city || program.org_city_v2},{" "}
              {program.org_state || program.org_state_v2},{" "}
              {(program.zip_code || program.zip_code_v2).slice(0, 5)}
            </li>
          </ul>
        </Accordion>
        {/*TODO*/}
        {/*<Accordion.Toggle as="h4" eventkey="1">*/}
        {/*  <div className="mt-4">*/}
        {/*    Program Details*/}
        {/*    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />*/}
        {/*  </div>*/}
        {/*</Accordion.Toggle>*/}
        {/*<Accordion eventkey="1">*/}
        {/*  <div>*/}
        {/*    <p className="text-primary text-uppercase mt-3">*/}
        {/*      Eligibility requirements*/}
        {/*    </p>*/}
        {/*    <ul>*/}
        {/*      {program.eligibilityRequirements.map((item, index) => (*/}
        {/*        <li key={index}>{item}</li>*/}
        {/*      ))}*/}
        {/*    </ul>*/}
        {/*    <p className="text-primary text-uppercase">Target Population</p>*/}
        {/*    <ul>*/}
        {/*      {program.targetPopulation.map((item, index) => (*/}
        {/*        <li key={index}>{item}</li>*/}
        {/*      ))}*/}
        {/*    </ul>*/}
        {/*    <p className="text-primary text-uppercase">Other</p>*/}
        {/*    <ul>*/}
        {/*      {program.other.map((item, index) => (*/}
        {/*        <li key={index}>{item}</li>*/}
        {/*      ))}*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</Accordion>*/}
      </Accordion>
    </div>
  );
};
export default ProgramDetails;
