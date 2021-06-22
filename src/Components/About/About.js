import React from "react";
import SupportFooter from "../SupportFooter/SupportFooter.js";

const About = () => {
  return (
    <div>
      <div className="page-wrapper">

        <h1>About Us</h1>

        <p className="lead">
          The Northwest Health Career Path (NWHCP) connects underrepresented
          students of all ages with healthcare career programs
        </p>
        <p>
          To do so, we collect and post information on what we call pathway or
          outreact programs
        </p>
        <p>
          Students can access this information on our website and identify
          opportunities in their local area.
        </p>

        <h2>Mission</h2>

        <p className="lead">
          Our hope is that other users like advisors, counselors, and program
          administrators will utilize this information to direct students and
          find ways to bridge gaps in programming.
        </p>
        <p>
          We also work to bolster communication between the pathway programs
          themselves.
        </p>
        <p>
          We create opporunities for staff, faculty, and students to come
          together each year at the annual Northweest Health Career Path Summit.
        </p>
        <p>
          Participants are given the opportunity to share their knowledge on how
          to remove the barriers that underrepresented students face in moving
          forward with their dreams.
        </p>
        <p>
          This Summit is also a great venue for networking, professional
          development, and collaboration.
        </p>
      </div>

      <SupportFooter />

    </div>
  );
};

export default About;