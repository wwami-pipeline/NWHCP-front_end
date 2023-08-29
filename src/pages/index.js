/* main page */
import React from "react";
import Grid from '@mui/material/Grid';
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Students from "../images/homepage_collage.png";

const Home = () => {
  return (
    <Grid container
      style={{
        paddingTop: "3%",
        paddingBottom: "3%",
        width: "90%",
        margin: "auto"
      }}>

      <Grid
        xs={12} md={4}
        item container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h3 className="text-primary" style={{ textAlign: "center" }}>
          Achieve your Future
        </h3>
        <p style={{ textAlign: "center", marginTop: "5%" }}>
          Are you a student pursuing a career in the health professions?
        </p>
        <p style={{ textAlign: "center" }}>
          Do you come from a background that might place barriers in your way?
        </p>
        <p style={{ textAlign: "center", marginTop: "5%" }}>
          Explore our site to find supplemental programs and opportunities that will help you reach your goals.
        </p>
  
        <Link to="/programs">
          <Button
            size="lg"
            variant="primary"
            style={{
              borderRadius: "24px",
              boxShadow: "1px #949494",
              fontSize: "14px",
              textTransform: "uppercase",
              marginTop: "20%"
            }}
          >
            Get Started
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={8}>
        <img
          src={Students}
          alt="students"
          style={{
            margin: 30,
            width: "85%",
            height: "auto"
          }}
        />
      </Grid>
    </Grid>
  );
};
export default Home;
