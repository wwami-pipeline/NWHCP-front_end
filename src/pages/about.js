import React from "react";
import SupportFooter from "../components/SupportFooter.js";
import JoinUs from "../components/JoinUs.js";
import { StaticImage } from "gatsby-plugin-image";
const About = () => {
  return (
    <div>
      <div className="page-wrapper text-left">
        <h1 className="text-primary my-4">About Us</h1>
        <StaticImage src="../images/banner.png" alt="banner" />
        <p className="lead">
          NWHCP seeks to connect underrepresented students of all ages who are
          interested in pursuing a career in healthcare with opportunities that
          will help them to achieve their goal.
        </p>
        <p>
          To do so, we collect and distribute information on what we call
          pathway or outreach programs. Students can access this information on
          our website, allowing them to identify opportunities in their local
          area. Our hope is that other users like advisors, counselors, and
          program administrators will also utilize this information to direct
          students and find ways to bridge gaps in programming.
        </p>
        <hr />
        <JoinUs />
      </div>
      <SupportFooter />
    </div>
  );
};
export default About;
