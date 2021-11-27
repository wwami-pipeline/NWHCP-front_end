import React from "react";
import { Link } from "gatsby";
import { Button, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faGlobe,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../../scss/program-details.scss";
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
  // build career emphasis list
  const allCareers = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("career_emp"))
  );
  let careerEmphasis = [];
  Object.keys(allCareers).map(function (career) {
    if (allCareers[career] == 1) {
      careerEmphasis.push(career.split("___")[1]);
    }
  });
  console.log(careerEmphasis);
  const emphasisList = careerEmphasis.map((emphasis, index) => {
    return (
      <li key={index} className="w-50">
        <span className="fa-li">
          <FontAwesomeIcon icon={faCheck} className="text-success" />
        </span>
        {emphasis}
      </li>
    );
  });
  // render page
  return (
    <div className="page-wrapper">
      <Link to="/programs">
        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
        Search Results
      </Link>
      <h3 className="text-primary mt-4 mb-3">
        {program.org_name || program.org_name_v2}
      </h3>
      <p>{program.description}</p>
      <h4>Career Emphasis</h4>
      <ul className="fa-ul d-flex flex-row flex-wrap">{emphasisList}</ul>
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
        <Accordion.Toggle as="h4" eventkey="1">
          <div className="mt-4">
            Program Details
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </div>
        </Accordion.Toggle>
        <Accordion eventkey="1">
          <div>
            <p className="text-primary text-uppercase mt-3">
              Eligibility requirements
            </p>
            <ul>
              {program.eligibilityRequirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-primary text-uppercase">Target Population</p>
            <ul>
              {program.targetPopulation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-primary text-uppercase">Other</p>
            <ul>
              {program.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Accordion>
      </Accordion>
    </div>
  );
};
export default ProgramDetails;
