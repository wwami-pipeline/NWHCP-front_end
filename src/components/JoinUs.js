import React from "react";
import { Button } from "react-bootstrap";

const JoinUs = () => {
  return (
    <div className="mb-4">
      <h2>For Program Administrators</h2>
      <p>
        Are you an organization looking to add your healthcare program to our
        database? The Northwest Health Career Pathway provides opportunities for
        students from diverse backgrounds to explore health careers through
        experiential learning.
      </p>
      <p>
        Help us create a health workforce that is reflective of the people of
        our communities by adding your program to our project. Add your program
        by clicking the button below and help us spread the word!
      </p>
      <div className="text-center">
        <Button
          variant="primary"
          size="lg"
          href="https://redcap.iths.org/surveys/?s=4PPLMJ7FHY"
          rel="noreferrer"
          target="_blank"
        >
          Post Opportunity
        </Button>
      </div>
    </div>
  );
};

export default JoinUs;
