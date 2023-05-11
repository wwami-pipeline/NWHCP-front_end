/*
Program Details
"More Details" page
 */
import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../scss/program-details.scss";
import {
  prettyCareer,
  prettyGrade,
  prettyPathway,
} from "../../shared/filters.js";
import { Grid, Typography, Button } from "@mui/material";
import Logo from "../../images/logo-image.png";
import { validateWebsiteWithVersion } from "../../utils/websiteUrl";

const menuButtonNameID = [
  "About the Program",
  "Program Logistics",
  "Applicant Profile",
];

function ProgramDetails(props) {
  const [section, setSection] = useState(0);
  const contactRef = useRef(null);

  const validateUrl = (url) => {
    let valid = /^(ftp|http|https):\/\//.test(url);
    return valid ? url : "https://" + url;
  };
  if (props.location.state === undefined) {
    return null;
  }
  const program = {
    ...props.location.state,
    OrgWebsite: validateUrl(props.location.state.OrgWebsite),
    eligibilityRequirements: ["one", "two"],
    targetPopulation: ["one", "two"],
    other: ["one", "two"],
  };
  // career emphasis
  const allCareers = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("career_emp"))
  );
  let careerEmphasis = [];
  Object.keys(allCareers).forEach(function (career) {
    if (allCareers[career] === "1") {
      careerEmphasis.push(prettyCareer[career.split("___")[1]]);
    }
  });

  // Time
  const allTime = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("program_duration"))
  );
  let orgTimimg = [];
  Object.keys(allTime).forEach(function (el) {
    if (allTime[el] === "1") {
      orgTimimg.push(el.split("___")[1]);
    }
  });

  // Finaid

  const allOrgAid = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("fin_support"))
  );
  let finaids = [];
  Object.keys(allOrgAid).forEach(function (el) {
    if (allOrgAid[el] === "1") {
      finaids.push(el.split("___")[1].slice(4, -1));
    }
  });

  // org Type
  const allOrgTypes = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("org_type"))
  );
  let orgTypes = [];
  Object.keys(allOrgTypes).forEach(function (el) {
    if (allOrgTypes[el] === "1") {
      orgTypes.push(el.split("___")[1]);
    }
  });

  // console.log(orgTypes)
  // education levels
  const allGrades = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("target_school_age"))
  );
  let gradeLevel = [];
  Object.keys(allGrades).forEach(function (grade) {
    if (allGrades[grade] === "1") {
      gradeLevel.push(prettyGrade[grade.split("___")[1]]);
    }
  });
  // program type
  const allPathways = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("pathway_type"))
  );
  let pathways = [];
  Object.keys(allPathways).forEach(function (type) {
    if (allPathways[type] === "1") {
      pathways.push(prettyPathway[type.split("___")[1]]);
    }
  });
  // academic credits
  const allAcadCreds = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("academic_credit"))
  );
  let hasAcadCred = "No";
  Object.keys(allAcadCreds).forEach(function (entry) {
    if (allAcadCreds[entry] === "1") {
      hasAcadCred = "Yes";
    }
  });
  // age requirements
  const allAgeReqs = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("age_requirement"))
  );
  let ageReq = "No";
  Object.keys(allAgeReqs).forEach(function (entry) {
    if (allAgeReqs[entry] === "1") {
      ageReq = entry.match("___(.*)")[1];
    }
  });
  // certificates
  const allCerts = Object.fromEntries(
    Object.entries(program).filter(([key]) => key.includes("certificate_title"))
  );
  let certString = "No information provided";
  Object.keys(allCerts).forEach(function (entry) {
    if (allCerts[entry] !== "") {
      certString = allCerts[entry];
    }
  });

  const SubSectionNavDetail = ({ subSectionName }) => {
    return (
      <Grid container style={{ marginBottom: 24 }}>
        <Grid
          item
          xs={9}
          style={{
            backgroundColor: "#074983",
            padding: 12,
            width: "100%",
            color: "white",
            fontWeight: 800,
          }}
        >
          <Typography style={{ fontSize: 28, fontWeight: 700, marginLeft: 30 }}>
            {subSectionName}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            style={{ borderRadius: "0", width: "100%", height: "100%" }}
          >
            <Typography style={{ fontWeight: 700, fontSize: 18 }}>
              Show on Map
            </Typography>
          </Button>
        </Grid>
      </Grid>
    );
  };

  const DetailCategoryDisplay = ({ title, obj }) => {
    if (Array.isArray(obj)) {
      return (
        <Grid container style={{ marginBottom: 6 }}>
          <Typography style={{ fontSize: "16px", fontWeight: 700 }}>
            {title}:&nbsp;
          </Typography>
          <Typography style={{ fontSize: "16px" }} align={"left"} inline>
            {obj.length !== 0 ? obj.join(", ") : "No information provided"}
          </Typography>
        </Grid>
      );
    }

    if (typeof obj === "string" || obj instanceof String) {
      let str = "";
      if (obj === "1") {
        str = "Yes";
      } else if (obj === "0") {
        str = "No information provided";
      } else if (obj === "") {
        str = "No information provided";
      } else {
        str = obj;
      }
      return (
        <Grid container style={{ marginBottom: 6 }}>
          <Typography style={{ fontSize: "16px", fontWeight: 700 }}>
            {title}:&nbsp;
          </Typography>
          <Typography style={{ fontSize: "16px" }} align={"left"} inline>
            {str}
          </Typography>
        </Grid>
      );
    }
  };

  const AboutApplicant = ({ program }) => {
    return (
      <Grid container>
        <SubSectionNavDetail subSectionName={"Application's Profile"} />
        <DetailCategoryDisplay title={"Age requirement"} obj={ageReq} />
        <DetailCategoryDisplay title={"DACA"} obj={program.daca___yes} />
        <DetailCategoryDisplay title={"Education Level"} obj={gradeLevel} />
        <DetailCategoryDisplay
          title={"Background Check Requirement"}
          obj={program.eligibility___bground_check}
        />
        <DetailCategoryDisplay
          title={"Citizenship Requirement"}
          obj={program.eligibility___citizen}
        />
        <DetailCategoryDisplay
          title={"Residency Requirement"}
          obj={program.eligibility___residency}
        />
        <DetailCategoryDisplay title={"Prerequisites"} obj={program.prereqs} />
        <DetailCategoryDisplay
          title={
            "Requirement to be enrolled in Academic Program or School to participate"
          }
          obj={program.enrollment___yes}
        />
      </Grid>
    );
  };

  const AboutLogistricSection = ({ program }) => {
    return (
      <Grid container>
        <SubSectionNavDetail subSectionName={"Program Logistics"} />
        <DetailCategoryDisplay
          title={"Public Transportation"}
          obj={program.public_transportation}
        />
        <DetailCategoryDisplay title={"Program's Time"} obj={orgTimimg} />
        <DetailCategoryDisplay title={"Program's Fee"} obj={program.has_cost} />
        <DetailCategoryDisplay title={"Financial Aid"} obj={finaids} />
        <DetailCategoryDisplay title={"Grants"} obj={program.grants___yes} />
        <DetailCategoryDisplay title={"Loan"} obj={""} />
      </Grid>
    );
  };

  const AboutProgramSection = ({ program }) => {
    return (
      <Grid container>
        <SubSectionNavDetail subSectionName={"About the Program"} />
        <Grid container style={{ marginBottom: 6 }}>
          <p>{program.description}</p>
          {/* <DetailCategoryDisplay title={"Organization Details"} obj="" /> */}
          <DetailCategoryDisplay title={"Organization Type"} obj={orgTypes} />
          <DetailCategoryDisplay
            title={"Service Area"}
            obj={program.other_servicearea}
          />
          <DetailCategoryDisplay
            title={"Career Emphasis"}
            obj={careerEmphasis}
          />
          <DetailCategoryDisplay title={"Academic Credit"} obj={hasAcadCred} />
          <DetailCategoryDisplay
            title={"Shadow Opportunity"}
            obj={program.has_shadow}
          />
          <DetailCategoryDisplay
            title={"Certificates Offered"}
            obj={certString}
          />
        </Grid>
      </Grid>
    );
  };

  const SubDetailMenuButton = ({ id, name }) => {
    return (
      <Grid container>
        <Button
          style={{
            background: id !== section ? "white" : "#004987",
            height: "100%",
            padding: 20,
            width: "100%",
            borderRadius: 0,
          }}
          onClick={() => setSection(id)}
        >
          <Typography
            style={{
              fontSize: 18,
              color: id !== section ? "#004987" : "white",
              fontWeight: id === section ? 600 : 300,
            }}
          >
            {name}
          </Typography>
        </Button>
      </Grid>
    );
  };

  const ContactSection = ({ program, reef }) => {
    return (
      <>
        <Typography
          style={{
            padding: 12,
            fontSize: 20,
            fontWeight: 700,
            color: "#004978",
          }}
          id={"contact-section"}
          ref={reef}
        >
          Contact
        </Typography>
        <ul id="contact-information" className="fa-ul contact-info">
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <a
              href={validateWebsiteWithVersion([
                program.org_website,
                program.org_website_v2,
              ])}
              target="_blank"
              rel="noreferrer"
            >
              Program's website
            </a>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href={`mailto:${program.org_email || program.org_email_v2}`}>
              {program.org_email || program.org_email_v2}
            </a>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <a
              href={
                "tel:+1" +
                (program.org_phone_number || program.org_phone_number_v2).match(
                  /\d+/g
                )
              }
            >
              {program.org_phone_number}
              {program.org_phone_number_v2}
            </a>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            {program.street_address_1 || program.street_address_1_v2},{" "}
            {program.street_address_2 || program.street_address_2_v2},{" "}
            {program.org_city || program.org_city_v2},{" "}
            {program.org_state || program.org_state_v2},{" "}
            {(program.zip_code || program.zip_code_v2).slice(0, 5)}
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <Link to="/programs">
        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
        Search Results
      </Link>
      <Grid container style={{ marginTop: 24 }}>
        <Grid
          item
          xs={2}
          style={{
            height: 200,
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></Grid>
        <Grid item xs={8}>
          <Grid container style={{ marginLeft: 16 }}>
            <h3 className="text-primary mt-4 mb-3" style={{ width: "100%" }}>
              {program.org_name || program.org_name_v2 || ""}
            </h3>
            <p>
              {(program.street_address_1 || program.street_address_1_v2 || "") +
                " " +
                (program.street_address_2 ||
                  program.street_address_2_v2 ||
                  "") +
                ", " +
                (program.org_city || program.org_city_v2 || "") +
                ", " +
                (program.org_state || program.org_state_v2 || "") +
                ", " +
                (program.zip_code || program.zip_code_v2 || "")}
            </p>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            style={{
              borderRadius: 0,
              width: "100%",
              marginBottom: 12,
              marginTop: 12,
            }}
          >
            <a
              href={validateWebsiteWithVersion([
                program.org_website,
                program.org_website_v2,
              ])}
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Website
            </a>
          </Button>
          <Button
            onClick={() =>
              contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            variant="contained"
            style={{ borderRadius: 0, width: "100%", marginBottom: 12 }}
          >
            <a className="text-white">Go to contact</a>
          </Button>
          <Button
            variant="contained"
            style={{ borderRadius: 0, width: "100%", marginBottom: 12 }}
          >
            <a
              href={`mailto:${program.org_email || program.org_email_v2}`}
              className="text-white"
            >
              Send Email
            </a>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          marginTop: 40,
          paddingTop: 24,
          borderTop: "1px solid #004987",
          minHeight: 600,
        }}
      >
        <Grid item xs={3}>
          <Grid
            container
            direction="row"
            alignContent={"space-between"}
            style={{ height: "100%" }}
          >
            <Grid item xs={12}>
              {menuButtonNameID.map((e, i) => {
                return (
                  <SubDetailMenuButton
                    key={i}
                    id={i}
                    name={e}
                  ></SubDetailMenuButton>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <ContactSection program={program} reef={contactRef} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} style={{ paddingLeft: 12 }}>
          {section === 0 && <AboutProgramSection program={program} />}
          {section === 1 && <AboutLogistricSection program={program} />}
          {section === 2 && <AboutApplicant program={program} />}
        </Grid>
      </Grid>
    </>
  );
}
export default ProgramDetails;
