/*
Search Form
Shows the text search box and filters, in the "Find Programs" page
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  advanced,
  careers,
  duration,
  enrollment,
  gradeLevels,
  programType,
} from "../../shared/filters.js";
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
    if (name === "CareerEmp" || name === "GradeLevels") {
      // expects an array
      newState[name] = target.checked
        ? [...newState[name], value] // add the item
        : newState[name].filter((item) => item !== value); // remove the item
    } else if (target.type === "checkbox") {
      // expects true or false
      newState[name] = target.checked;
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
      searchContent: props.formData.searchContent,
    });
    //clickFilterButton();
  };
  return (
    <div className="search-form mb-4">
      {/* Search by keyword */}
      <Form onSubmit={props.handleSubmit} className="keyword-search">
        <Form.Group>
          <Form.Label>Find a Career Path</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              name="searchContent"
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
                      {gradeLevels.map((grade, i) => {
                        const options = props.formData.GradeLevels;
                        return (
                          <Form.Check
                            type="checkbox"
                            name="GradeLevels"
                            label={grade.name}
                            value={grade.id}
                            key={"grade" + i}
                            onChange={handleFormChange}
                          />
                        );
                      })}
                    </div>
                  </Accordion.Collapse>
                </Form.Group>
              </Accordion>
            </Col>
            <Col>
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
                          label={program}
                          value={program}
                          key={"program" + i}
                          onChange={handleFormChange}
                        />
                      ))}
                    </div>
                  </Accordion.Collapse>
                </Form.Group>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Form.Group controlId="formCareer">
                  <Form.Label>
                    <Accordion.Toggle as={Form.Label} eventKey="2">
                      Career Emphasis{caretIcon}
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
            <Col>
              <Accordion>
                <Form.Group controlId="formEnrollment">
                  <Form.Label>
                    <Accordion.Toggle as={Form.Label} eventKey="3">
                      Cost <br />
                      {caretIcon}
                    </Accordion.Toggle>
                  </Form.Label>
                  <Accordion.Collapse eventKey="3">
                    <div>
                      <Form.Check className="d-none" />
                      {enrollment.map((cost, i) => (
                        <Form.Check
                          type="checkbox"
                          name="HasCost"
                          label={cost}
                          key={"cost" + i}
                        />
                      ))}
                    </div>
                  </Accordion.Collapse>
                </Form.Group>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Form.Group controlId="formDuration">
                  <Form.Label>
                    <Accordion.Toggle as={Form.Label} eventKey="4">
                      Program Timing <br />
                      {caretIcon}
                    </Accordion.Toggle>
                  </Form.Label>
                  <Accordion.Collapse eventKey="4">
                    <div>
                      <Form.Check className="d-none" />
                      {duration.map((time, i) => (
                        <Form.Check
                          type="checkbox"
                          name="Duration"
                          label={time}
                          key={"time" + i}
                        />
                      ))}
                    </div>
                  </Accordion.Collapse>
                </Form.Group>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Form.Group controlId="formAdvanced">
                  <Form.Label>
                    <Accordion.Toggle as={Form.Label} eventKey="5">
                      Advanced Search <br />
                      {caretIcon}
                    </Accordion.Toggle>
                  </Form.Label>
                  <Accordion.Collapse eventKey="5">
                    <div>
                      <Form.Check className="d-none" />
                      {advanced.map((item, i) => (
                        <Form.Check
                          type="checkbox"
                          name={item.codeName}
                          label={item.name}
                          key={"advanced" + i}
                        />
                      ))}
                    </div>
                  </Accordion.Collapse>
                </Form.Group>
              </Accordion>
            </Col>
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
  );
}
