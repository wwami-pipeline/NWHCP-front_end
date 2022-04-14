import React from "react";
import SupportFooter from "../components/SupportFooter.js";
import JoinUs from "../components/JoinUs.js";
import { StaticImage } from "gatsby-plugin-image";
import PathwayDropdown from "../components/PathwayDropdown.js";
const About = () => {
  return (
    <div>
      <div className="page-wrapper text-left">
        <h1 className="text-primary my-4">About Us</h1>
        <StaticImage src="../images/banner.png" alt="banner" />
        <p className="lead">
          NWHCP seeks to connect underrepresented students of all ages who are interested in pursuing a career in healthcare to pathway and education programs that will help them to achieve their professional development goals.
        </p>
        <div className="mb-4">
          <h2>Pathway Programs</h2>
          <b>
            What do we mean by Pathway Program?
          </b>
          <p>
            The pathway programs on our map provide opportunities for under-represented students to gain the skills required to achieve their goal of entering health profession schools and training programs. A student may create their own “pathway” by participating in a series of programs starting in secondary school through college and beyond.  These programs are sometimes referred to as pipeline, supplemental and enrichment activities, or professional development.
          </p>
          <p>
            Ultimately, pathway programs help to build a healthcare workforce that reflects our communities. This site works to connect students to systems that improve equity and access to education
          </p>
          <PathwayDropdown title={"Test"} />
        </div>
        <b>
          Schools and Training Programs for the Health Professions
        </b>
        <p>
          Schools and training programs are also represented on our map. It’s important for students to identify their end goal as they work to create a “pathway” to get there
        </p>
        <hr />
        <JoinUs />
      </div>
      <SupportFooter />
    </div>
  );
};
export default About;
