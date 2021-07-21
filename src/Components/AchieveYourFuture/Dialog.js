import React, { useState } from "react";
import { Button, ListGroup, Modal, Image, Row, Col } from "react-bootstrap";

export const Dialog = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [whereStudy, setWhereStudy] = useState("");

  const handleSelection = (event, selected) => {
    event.preventDefault();
    setWhereStudy(selected);
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="dialog-rounded">
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          Tell us more about you
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-primary text-center">
          Where are you in your life right now?
        </p>
        <ListGroup defaultActiveKey={whereStudy}>
          <ListGroup.Item
            action
            href="#middle-school"
            onClick={(e) => handleSelection(e, "middle-school")}
          >
            <Row className="align-items-center">
              <Col xs={4}>
                <Image
                  src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg"
                  thumbnail
                />
              </Col>
              <Col>
                <p>
                  <b>Middle School</b>
                </p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#high-school"
            onClick={(e) => handleSelection(e, "high-school")}
          >
            <Row className="align-items-center">
              <Col xs={4}>
                <Image
                  src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg"
                  thumbnail
                />
              </Col>
              <Col>
                <p>
                  <b>High School</b>
                </p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#community-college"
            onClick={(e) => handleSelection(e, "community-college")}
          >
            <Row className="align-items-center">
              <Col xs={4}>
                <Image
                  src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg"
                  thumbnail
                />
              </Col>
              <Col>
                <p>
                  <b>Community College</b>
                </p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="undergraduated"
            onClick={(e) => handleSelection(e, "undergraduated")}
          >
            <Row className="align-items-center">
              <Col xs={4}>
                <Image
                  src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg"
                  thumbnail
                />
              </Col>
              <Col>
                <p>
                  <b>Undergraduated</b>
                </p>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <div className="text-center pb-4">
        <Button variant="primary" onClick={handleClose}>
          Next
        </Button>
      </div>
    </Modal>
  );
};
