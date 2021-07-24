import React, { useState } from "react";
import { Button, Container, Collapse, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGlobe,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export const Program = () => {
  const program = {
    id: 1,
    title: "Nursing Assistant Program",
    location: "Seatle Central College",
    educationLevel: "College | Academy",
    careerEmphasis: "Nursing",
    description:
      "The nursing program at Seatle Central offers an Associate in Nursing Direct Transfer Degree/Major Related Program (AN DTA/MRP) with...",
    image:
      "https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg",
    elegibilityRequirements: ["one", "two"],
    targetPopulation: ["one", "two"],
    other: ["one", "two"],
  };
  const [contactInfo, setContactInfo] = useState(false);
  const [programDetail, setProgramDetail] = useState(false);

  return (
    <Container className="mb-4">
      <h1 className="text-primary text-center">{program.title}</h1>
      <Row className="align-items-center">
        <Col xs={4}>
          <Image src={program.image} thumbnail />
        </Col>
        <Col>
          <p>{program.location}</p>
          <p>{program.educationLevel}</p>
          <p>{program.careerEmphasis}</p>
        </Col>
      </Row>
      <p className="mt-4">{program.description}</p>
      <div className="my-4">
        <a href="#">Show more</a>
      </div>
      <div className="mb-3">
        <Button variant="outline-primary" block>
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          Visit Program Website
        </Button>
      </div>
      <div className="mb-3">
        <Button variant="outline-primary" block>
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download Program Brochure
        </Button>
      </div>

      <div>
        <Button
          onClick={() => setContactInfo(!contactInfo)}
          aria-controls="contact-information"
          aria-expanded={contactInfo}
          block
          className="text-left d-flex justify-content-between align-items-center"
          variant="light"
        >
          Contact Information
          <FontAwesomeIcon
            icon={contactInfo ? faChevronUp : faChevronDown}
            className="mr-2 text-right"
          />
        </Button>
        <Collapse in={contactInfo}>
          <div id="contact-information">
            <Row className="align-items-center ml-0 mr-0 mb-2 mt-2">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              <p className="mb-0">Website: {program.website}</p>
            </Row>
            <Row className="align-items-center ml-0 mr-0 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <p className="mb-0">E-mail: {program.email}</p>
            </Row>
            <Row className="align-items-center ml-0 mr-0 mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <p className="mb-0">Phone Number: {program.phoneNumber}</p>
            </Row>
            <Row className="align-items-center ml-0 mr-0 mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <p className="mb-0">Address: {program.website}</p>
            </Row>
          </div>
        </Collapse>
      </div>
      <div>
        <Button
          onClick={() => setProgramDetail(!programDetail)}
          aria-controls="contact-information"
          aria-expanded={programDetail}
          block
          className="text-left d-flex justify-content-between align-items-center"
          variant="light"
        >
          Program Detail
          <FontAwesomeIcon
            icon={programDetail ? faChevronUp : faChevronDown}
            className="mr-2 text-right"
          />
        </Button>
        <Collapse in={programDetail}>
          <div id="program-detail">
            <p className="text-primary text-uppercase mt-3">
              Elegibility requirements
            </p>
            <ul>
              {program.elegibilityRequirements.map((item, index) => (
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
        </Collapse>
      </div>
    </Container>
  );
};
