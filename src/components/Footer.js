import React from "react";
import "../scss/footers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Grid, Link } from "@mui/material";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer main-footer py-3 mt-4">
      <Container style={{ border: "10px solid white" }}>
        {/* Grid Container Open */}
        <Grid
          container
          spacing={12}
          style={{
            border: "10px solid yellow",
          }}
        >
          <Grid item xs={12} sm={4} style={{ border: "10px solid red" }}>
            <h2 style={{ color: "white", fontSize: "18px" }}>Address</h2>
          </Grid>
          <Grid item xs={12} sm={4} style={{ border: "10px solid red" }}>
            <h2 style={{ color: "white", fontSize: "18px" }}>
              Northwest Health Career Path
            </h2>
          </Grid>
          <Grid item xs={12} sm={4} style={{ border: "10px solid red" }}>
            <h2 style={{ color: "white", fontSize: "18px" }}>Keep in Touch</h2>
          </Grid>
        </Grid>
        {/* Grid Container Close */}
        {/* Grid Container Open */}
        <Grid
          container
          spacing={12}
          justifyContent={"space-between"}
          style={{ border: "10px solid orange" }}
        >
          <Grid item xs={5} style={{ border: "10px solid pink" }}>
            {/* <Grid item xs={9} style={{ border: "10px solid green" }}> */}
            <h4 className="footer">237 West Kellog Road, Bellingham, WA</h4>

            <h4
              className="sub-text-footer"
              style={{ color: "white", fontWeight: 500 }}
            >
              ahecww@whatcom.edu
            </h4>
            <h4
              className="sub-text-footer"
              style={{ color: "white", fontWeight: 500 }}
            >
              (360)-383-3170
            </h4>
          </Grid>
          {/* Grid Item Open */}
          <Grid
            item
            xs={3}
            style={{
              border: "10px solid purple",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <p style={{ margin: "20px" }}>
              Visit the Area Health Education Center of Western Washington
            </p>
            <Link href="https://www.ahecww.org/" style={{ margin: "5px" }}>
              <Button
                size="lg"
                variant="secondary"
                style={{
                  borderRadius: "8px",
                  borderStyle: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                  height: "40px",
                  lineHeight: "20px",
                  padding: "10px 16px",
                  position: "relative",
                  textAlign: "center",
                  verticalAlign: "baseline",
                  width: "max-width",
                  backgroundColor: "#008080",
                  bottom: "8px",
                }}
              >
                AHECWW.org
              </Button>
            </Link>
            <article>
              <p className="small mt-2" style={{ fontSize: "16px" }}>
                NWHCP ©2023
              </p>
              <p className="small mt-2" style={{ width: "200%" }}>
                Please use computer browser for best experience
              </p>
            </article>

            {/* Grid Item Close */}
            {/* <Mailto email="ahecww@whatcom.edu" obfuscate={true}> */}
            {/* <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ height: 56, width: 56 }}
                /> */}
            {/* </Mailto> */}
          </Grid>
          <Grid item xs={4} style={{ border: "10px solid black" }}>
            {/* <Grid container style={{ border: "10px solid lime" }}> */}
            <Grid item xs={9} style={{ border: "10px solid lime" }}>
              <form>
                <p style={{ margin: "10px" }}>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter Your First Name"
                    required
                  />
                </p>
                <p style={{ margin: "10px" }}>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </p>
                <p style={{ margin: "10px" }}>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </p>
                <p>
                  <label value="question" style={{ width: "200%" }}>
                    Are You a Student or Program Administrator?
                  </label>
                  <textarea
                    name="question"
                    value="question"
                    rows="5"
                    cols="30"
                    maxLength="300"
                    style={{ color: "grey" }}
                    defaultValue="Please tell us a few words about how we can help you"
                  ></textarea>
                </p>
                <label value="submit" style={{ width: "200%" }}>
                  By Clicking 'Submit', You Certify That You Are At Least 13
                  Years of Age.
                </label>
                <button
                  style={{
                    backgroundColor: "#088F8F",
                    margin: "10px",
                    borderRadius: "8px",
                    borderStyle: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    height: "40px",
                    lineHeight: "20px",
                    padding: "10px 16px",
                    position: "relative",
                    textAlign: "center",
                    verticalAlign: "baseline",
                  }}
                >
                  Submit
                </button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
