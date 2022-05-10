import React from "react";
import SupportFooter from "../components/SupportFooter.js";
import { Grid } from '@mui/material'
import { Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import SchoolAndTrainingWrapper from "../components/schoolAndTrainingWrapper";
import PathwayWrapper from "../components/pathwayWrapper.js";
const About = () => {
  return (
    <div>
      <div className="page-wrapper text-left">
        <h1 className="text-primary my-4">About Us</h1>
        <div style={{ display: "flex", direction: 'row', alignContent: "start", margin: "24px 0px" }}>
          <StaticImage
            src="../images/logo-image.png"
            alt="NWHCP Logo"
            width={100}
          />
          <h2 style={{ margin: 0, color: "#435B70", paddingTop: 8 }}>Northwest Health Career Path</h2>
        </div>
        {/* <StaticImage src="../images/banner.png" alt="banner" /> */}
        <p className="lead">
          NWHCP seeks to connect underrepresented students of all ages who are interested in pursuing a career in healthcare to pathway and education programs that will help them to achieve their professional development goals.
        </p>
        <p>
          To do so, we collect and distribute information on what we call
          pathway or outreach programs. Students can access this information on
          our website, allowing them to identify opportunities in their local
          area. Our hope is that other users like advisors, counselors, and
          program administrators will also utilize this information to direct
          students and find ways to bridge gaps in programming.
        </p>
        <br />
        <h3 style={{ color: "#435B70" }}>
          The Northwest Health Career Path Map will help you to find
        </h3>
        <br />
        <div className="mb-4">
          <h4 style={{ color: "#435B70", paddingBottom: "8px" }}>Pathway Programs</h4>
          {/* <b>
            What do we mean by Pathway Program?
          </b> */}
          <p>
            The pathway programs on our map provide opportunities for under-represented students to gain the skills required to achieve their goal of entering health profession schools and training programs. A student may create their own “pathway” by participating in a series of programs starting in secondary school through college and beyond.  These programs are sometimes referred to as pipeline, supplemental and enrichment activities, or professional development.
          </p>
          <p>
            Ultimately, pathway programs help to build a healthcare workforce that reflects our communities. This site works to connect students to systems that improve equity and access to education
          </p>
          <PathwayWrapper />
        </div>
        <h4 style={{ color: "#435B70", paddingBottom: "8px" }}>
          Schools and Training Programs for the Health Professions
        </h4>
        <p>
          Schools and training programs are also represented on our map. It’s important for students to identify their end goal as they work to create a “pathway” to get there
        </p>
        <SchoolAndTrainingWrapper />
        <hr />
        <Grid container justifyContent={'center'}>
          <Grid>
            <Button href="/programs" variant="primary" size="lg">
              Start Exploring
            </Button>
          </Grid>
        </Grid>
      </div>
      <SupportFooter />
    </div >
  );
};
export default About;
