/*
Search Form
Format search box and filters
 */
import React, { useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Grid, Typography } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { careers, gradeLevels } from "../../shared/filters.js";
import "../../scss/search-form.scss";

export default function SearchForm(props) {
  const caretIcon = <FontAwesomeIcon icon={faCaretDown} className="ml-2" />;
  const [buttonText, setButtonText] = useState("Select Filters");
  const [toggleFilters, setToggleFilters] = useState("d-none");
  const clickFilterButton = () => {
    if (toggleFilters === "d-none") {
      // Display filters
      setButtonText("Hide Filters");
      setToggleFilters("");
    } else {
      // Hide filters
      setButtonText("Select Filters");
      setToggleFilters("d-none");
    }
  };
  const handleFormChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    let newState = props.formData;
    if (name !== "SearchContent") {
      // expects an array
      newState[name] = target.checked
        ? [...newState[name], value] // add the item
        : newState[name].filter((item) => item !== value); // remove the item
    } else {
      // searchbar input
      newState[name] = value;
    }
    // console.log(newState[name]);
    props.setFormData(newState);
  };
  const resetForm = () => {
    Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    ).forEach((checkbox) => (checkbox.checked = false));
    props.setFormData({
      SearchContent: props.formData.SearchContent,
      CareerEmp: [],
      ProgramType: [],
      GradeLevels: [],
      Duration: [],
      Advanced: [],
    });
    // clickFilterButton();
  };
  return (
    <>
      <Grid>
        <Typography>Find a Career Path</Typography>
      </Grid>
      <Grid>Change this prop les go</Grid>
      <div className="search-form mb-4">
        {/* Search by keyword */}
        <Form onSubmit={props.handleSubmit} className="keyword-search">
          <Form.Group>
            <Form.Label>Find a Career Path</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                name="SearchContent"
                placeholder="Search by keyword or location"
                onChange={handleFormChange}
              />
              <InputGroup.Append>
                <Button variant="primary" size="sm" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        {/* Filters*/}
        <Button variant="secondary" onClick={clickFilterButton}>
          {buttonText}
        </Button>
        <Form
          onSubmit={props.handleSubmit}
          onReset={props.handleSubmit}
          className={toggleFilters}
          id="filtersForm"
        >
          <Container fluid className="pt-4">
            <Row>
              <Col>
                <Accordion>
                  <Form.Group controlId="formEducation">
                    <Form.Label>
                      <Accordion.Toggle as={Form.Label} eventKey="0">
                        Education Level
                        <br />
                        {caretIcon}
                      </Accordion.Toggle>
                    </Form.Label>
                    <Accordion.Collapse eventKey="0">
                      <div>
                        <Form.Check className="d-none" />
                        {gradeLevels.map((grade, i) => (
                          <Form.Check
                            type="checkbox"
                            name="GradeLevels"
                            label={grade.name}
                            value={grade.id}
                            key={"grade" + i}
                            onChange={handleFormChange}
                          />
                        ))}
                      </div>
                    </Accordion.Collapse>
                  </Form.Group>
                </Accordion>
              </Col>
              {/* <Col>
              <Accordion>
              <Form.Group controlId="formProgramType">
              <Form.Label>
              <Accordion.Toggle as={Form.Label} eventKey="1">
              Program Type
              <br />
                      {caretIcon}
                      </Accordion.Toggle>
                      </Form.Label>
                      <Accordion.Collapse eventKey="1">
                    <div>
                      <Form.Check className="d-none" />
                      {programType.map((program, i) => (
                        <Form.Check
                        type="checkbox"
                        name="ProgramType"
                        label={program.name}
                        value={program.id}
                        key={"program" + i}
                        onChange={handleFormChange}
                        />
                        ))}
                    </div>
                    </Accordion.Collapse>
                </Form.Group>
              </Accordion>
            </Col> */}
              <Col>
                <Accordion>
                  <Form.Group controlId="formCareer">
                    <Form.Label>
                      <Accordion.Toggle as={Form.Label} eventKey="2">
                        Career Emphasis <br />
                        {caretIcon}
                      </Accordion.Toggle>
                    </Form.Label>
                    <Accordion.Collapse eventKey="2">
                      <div>
                        <Form.Check className="d-none" />
                        {careers.map((career, i) => (
                          <Form.Check
                            type="checkbox"
                            name="CareerEmp"
                            label={career.name}
                            value={career.id}
                            key={"career" + i}
                            onChange={handleFormChange}
                          />
                        ))}
                      </div>
                    </Accordion.Collapse>
                  </Form.Group>
                </Accordion>
              </Col>
              {/*<Col>*/}
              {/*  <Accordion>*/}
              {/*    <Form.Group controlId="formDuration">*/}
              {/*      <Form.Label>*/}
              {/*        <Accordion.Toggle as={Form.Label} eventKey="4">*/}
              {/*          Program Timing <br />*/}
              {/*          {caretIcon}*/}
              {/*        </Accordion.Toggle>*/}
              {/*      </Form.Label>*/}
              {/*      <Accordion.Collapse eventKey="4">*/}
              {/*        <div>*/}
              {/*          <Form.Check className="d-none" />*/}
              {/*          {duration.map((time, i) => (*/}
              {/*            <Form.Check*/}
              {/*              type="checkbox"*/}
              {/*              name="Duration"*/}
              {/*              label={time.name}*/}
              {/*              value={time.id}*/}
              {/*              key={"time" + i}*/}
              {/*              onChange={handleFormChange}*/}
              {/*            />*/}
              {/*          ))}*/}
              {/*        </div>*/}
              {/*      </Accordion.Collapse>*/}
              {/*    </Form.Group>*/}
              {/*  </Accordion>*/}
              {/*</Col>*/}
              {/*<Col>*/}
              {/*  <Accordion>*/}
              {/*    <Form.Group controlId="formAdvanced">*/}
              {/*      <Form.Label>*/}
              {/*        <Accordion.Toggle as={Form.Label} eventKey="5">*/}
              {/*          Advanced Search <br />*/}
              {/*          {caretIcon}*/}
              {/*        </Accordion.Toggle>*/}
              {/*      </Form.Label>*/}
              {/*      <Accordion.Collapse eventKey="5">*/}
              {/*        <div>*/}
              {/*          <Form.Check className="d-none" />*/}
              {/*          {advanced.map((item, i) => (*/}
              {/*            <Form.Check*/}
              {/*              type="checkbox"*/}
              {/*              name="Advanced"*/}
              {/*              label={item.name}*/}
              {/*              value={item.id}*/}
              {/*              key={"advanced" + i}*/}
              {/*              onChange={handleFormChange}*/}
              {/*            />*/}
              {/*          ))}*/}
              {/*        </div>*/}
              {/*      </Accordion.Collapse>*/}
              {/*    </Form.Group>*/}
              {/*  </Accordion>*/}
              {/*</Col>*/}
            </Row>
            <Row>
              <div className="text-center pt-3">
                <Button
                  size="lg"
                  variant="primary"
                  type="submit"
                  className="mx-2"
                >
                  Apply filters
                </Button>
                <Button
                  type="reset"
                  size="lg"
                  variant="outline-primary"
                  onClick={resetForm}
                  className="mx-2"
                >
                  Clear Filters
                </Button>
              </div>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
}
