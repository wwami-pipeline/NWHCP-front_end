import React from "react";
import "../scss/footers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Grid, Link } from "@mui/material";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer main-footer py-3 mt-4">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <h2 style={{ color: "white" }}>Address</h2>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 style={{ color: "white" }}>
              Northwest Health Career Path Website
            </h2>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 style={{ color: "white" }}>Keep in Touch</h2>
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <Grid item xs={9}>
                <h4 className="footer">237 West Kellog Road, Bellingham, WA</h4>
                <b></b>
                <h4
                  className="sub-text-footer"
                  style={{ color: "white", fontWeight: 500 }}
                >
                  ahecww@whatcom.edu
                </h4>
                <b></b>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item xs={3}>
                <h4 className="footer">Visit</h4>
                <b></b>
                <b></b>
                <b></b>
                <b></b>
                <b></b>
                <b></b>
                <b></b>
                <Link href="https://www.ahecww.org/">
                  <Button
                    size="lg"
                    variant="secondary"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #101010",
                      padding: "3px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      boxShadow: "#202020",
                      width: "200%",
                    }}
                  >
                    AHECWW.org
                  </Button>
                </Link>
                <br></br>
                {/* <Mailto email="ahecww@whatcom.edu" obfuscate={true}> */}
                {/* <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ height: 56, width: 56 }}
                /> */}
                {/* </Mailto> */}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={9}>
                  <h4
                    className="sub-text-footer"
                    style={{ color: "white", fontWeight: 500 }}
                  >
                    (360)-383-3170
                  </h4>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction={"column"}>
              <br></br>
              <br></br>
              <p className="small mt-2" style={{ fontSize: "16px" }}>
                NWHCP ©2023
              </p>
              <p className="small mt-2">
                Please use computer browser for best experience
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
