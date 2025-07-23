import { Grid } from "@mui/material";
import React from "react";
import PathwayDropdown from "./PathwayDropdown";

export default function PathwayWrapper() {
  return (
    <>
      <PathwayDropdown level={0} title={"Examples"}>
        <Grid>
          <PathwayDropdown
            level={2}
            title={"• Health Career Awareness Programs "}
          >
            <Grid>
              <li>Health career discussions</li>
              <li>Hands-on activities and workshops</li>
              <li>Career Fair</li>
              <li>Field Trips and Tours</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown level={2} title={"• Tutoring & Skill Building "}>
            <Grid>
              <li>Study Skills and Time Management</li>
              <li>
                Soft skills development (e.g., communication and
                professionalism)
              </li>
              <li>
                {" "}
                Life Skills development (e.g., team building, leadership, career
                planning, budget planning, resume/interview, work readiness)
              </li>
              <li> Subject-based tutoring</li>
              <li> Healthcare Skill Development</li>
              <li> Computer Skills</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown level={2} title={"• College Readiness Programs "}>
            <Grid>
              <li>Application, Personal Statement, and Essay Writing</li>
              <li>Financial Aid, Grants, and Scholarships</li>
              <li> Mock Interviews</li>
              <li> Admissions Test Preparation</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown level={2} title={"• Youth Camps "}>
            <Grid>
              <li>Summer Camp</li>
              <li>Day Camp</li>
              <li>Other seasonal camps</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown
            level={2}
            title={"• Work-based Learning Opportunities"}
          >
            <Grid>
              <li>Internship</li>
              <li>Shadowing</li>
              <li>Apprenticeship</li>
              <li>Interprofessional Education Training</li>
              <li>Immersion</li>
              <li>Fellowships</li>
              <li>Residencies</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown level={2} title={"• Opportunities to be Mentored"}>
            <Grid>
              <li>Mentorship by a healthcare professional</li>
              <li>Mentorship by a healthcare professional student</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown level={2} title={"• Certification Programs"}>
            <Grid>
              <li>
                Mental Health First Aid, First Aid, CPR/BLS, HIPAA, Bloodborne
                Pathogen/HIV
              </li>
              <li>
                Suicide Prevention, Motivational Interviewing, De-escalation
                Training, Health Support Team
              </li>
              <li>Stackable Professional Development Certificates</li>
            </Grid>
          </PathwayDropdown>
          <PathwayDropdown
            level={2}
            title={"• Volunteer Community Service Programs"}
          />
        </Grid>
      </PathwayDropdown>
    </>
  );
}
