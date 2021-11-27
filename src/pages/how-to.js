import React from "react";
import "../scss/how-to.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import SupportFooter from "../components/SupportFooter.js";
import JoinUs from "../components/JoinUs.js";
const HowTo = () => {
  const check = (
    <span className="fa-li">
      <FontAwesomeIcon icon={faCheck} />
    </span>
  );
  return (
    <div>
      <div className="page-wrapper how-to-content">
        <div>
          <h2>How the NWHCP Site Works</h2>
          <p>
            Our map will link you to a variety of programs that will allow you
            to:
          </p>
          <ul className="fa-ul">
            <li>
              {check} Learn about opportunities in the health sciences and STEM
            </li>
            <li>{check} Experience hands-on activities</li>
            <li>{check} Prepare academically</li>
            <li>{check} Build your resume</li>
          </ul>
        </div>
        <div>
          <h2>Included Programs</h2>
          <Container className="text-center py-2">
            <Row>
              <Col xs={6}>
                <Figure>
                  <Figure.Image
                    src="/images/how-to/after-school-programs.svg"
                    alt="after school programs"
                    width="250px"
                  />
                  <Figure.Caption>After School Programs</Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6}>
                <Figure>
                  <Figure.Image
                    src="/images/how-to/summer-camps.svg"
                    alt="summer camps"
                    width="250px"
                  />
                  <Figure.Caption>Summer Camps</Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Figure>
                  <Figure.Image
                    src="/images/how-to/shadowing-opportunities.svg"
                    alt="shadowing opportunities"
                    width="250px"
                  />
                  <Figure.Caption>Shadowing Opportunities</Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6}>
                <Figure>
                  <Figure.Image
                    src="/images/how-to/internships.svg"
                    alt="internships"
                    width="250px"
                  />
                  <Figure.Caption>Internships</Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Figure>
                  <Figure.Image
                    src="/images/how-to/college-access-programs.svg"
                    alt="college access programs"
                    width="250px"
                  />
                  <Figure.Caption>College Access Programs</Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6}>
                <Figure>
                  <Figure.Image
                    src="/images/how-to/workshops.svg"
                    alt="workshops"
                    width="250px"
                  />
                  <Figure.Caption>Workshops</Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <Button variant="primary" size="lg">
              Start Exploring
            </Button>
          </Container>
        </div>
        <JoinUs />
      </div>
      <SupportFooter />
    </div>
  );
};
export default HowTo;
