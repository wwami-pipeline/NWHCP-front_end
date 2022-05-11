/*
Programs
Overall layout of "Find Programs" page
Filters results
 */
import React, { useEffect, useState } from "react";
import SearchForm from "../components/Programs/SearchForm";
import ProgramCard from "../components/Programs/ProgramCard";
import Map from "../components/Programs/Map";
import { Grid } from '@mui/material'
// save fetched data
let saved_res = null;

const fetchPrograms = (formData, setPrograms, setLoading, setError) => {
  setLoading(true);
  if (saved_res !== null) {
    // reuse fetched data
    loadPrograms(saved_res, formData, setPrograms);
  } else {
    fetch("https://nwhealthcareerpath.uw.edu/api/v3/orgs-all", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const error = new Error(
              `Status code ${response.status}: ${response.statusText}.`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((result) => {
        loadPrograms(result, formData, setPrograms);
      })
      .catch((error) => {
        console.log("Could not fetch data... " + error.message);
        setError(error);
      })
      .finally(setLoading(false));
  }
};

// update results based on search parameters
const loadPrograms = (result, formData, setPrograms) => {
  let res = result;
  let filteredResult = [];

  // filter by education level
  const eduLevels = formData["GradeLevels"];
  if (eduLevels !== undefined && eduLevels.length !== 0) {
    res.forEach((program) => {
      for (const attribute in program) {
        if (
          attribute.includes("target_school_age") &&
          program[attribute] === "1" &&
          eduLevels.some((element) => attribute.includes(element))
        ) {
          filteredResult.push(program);
          break;
        }
      }
    });
    res = filteredResult;
    filteredResult = [];
  }

  // filter by career
  const careerEmp = formData["CareerEmp"];
  if (careerEmp !== undefined && careerEmp.length !== 0) {
    res.forEach((program) => {
      for (const attribute in program) {
        if (
          attribute.includes("career_emp") &&
          program[attribute] === "1" &&
          careerEmp.some((element) => attribute.includes(element))
        ) {
          filteredResult.push(program);
          break;
        }
      }
    });
    res = filteredResult;
    filteredResult = [];
  }

  // filter by keywords
  const keyword = formData["SearchContent"].toLowerCase();
  if (keyword !== undefined && keyword.length !== 0) {
    res.forEach((program) => {
      let text = "";
      for (const attribute in program) {
        if (!["1", "0", ""].includes(program[attribute])) {
          text += " " + String(program[attribute]).toLowerCase();
        }
      }
      if (text.search(keyword) !== -1) {
        filteredResult.push(program);
      }
    });
    res = filteredResult;
    filteredResult = [];
  }

  // load filtered results
  setPrograms(res);
};

// Page Component
const SearchPrograms = ({ location }) => {
  const getUrlParams = () => {
    if (location.search) {
      // location is a URL object deconstructed from the component's props
      // Check url for search parameters
      // e.g. https://localhost:8000/search-programs?gradeLvl=0
      const params = new URLSearchParams(location.search);
      return [parseInt(params.get("gradeLvl"))];
    } else {
      return [];
    }
  };
  const [formData, setFormData] = useState({
    SearchContent: "",
    CareerEmp: [],
    ProgramType: [],
    GradeLevels: [],
    Duration: [],
    Advanced: [],
  });
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPrograms(formData, setPrograms, setLoading, setError);
  };
  const handleCardClick = (OrgId) => {
    // Show program on map
    var test = document.getElementById("mapid");
    var iconSelected = document.getElementsByClassName("marker" + OrgId);
    iconSelected[0].click();
    console.log("icon", iconSelected);
    test.scrollIntoView({
      behavior: "smooth",
    });
  };
  const RenderPrograms = (props) => {
    return props.programs.map((program, index) => {
      return (
        <div key={"program" + index}>
          <ProgramCard
            program={program}
            onClick={() => handleCardClick(program._id)}
          />
        </div>
      );
    });
  };
  useEffect(() => {
    fetchPrograms(formData, setPrograms, setLoading, setError);
    // Next line supresses useEffect dependency warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <SearchForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <div className="mt-5">
        <h3 className="text-center text-primary mb-5">
          Found {programs.length} programs
        </h3>
        {loading ? (
          <p>Loading Programs...</p>
        ) : error ? (
          <p>Error fetching programs...</p>
        ) : (
          <></>
          // <RenderPrograms programs={programs} />
        )}
      </div>
      <Grid container style={{ height: "90vh" }}>
        <Grid item xs={4} style={{ height: "inherit", overflowX: "hidden", }}>
          {programs.length && <RenderPrograms programs={programs} />}
        </Grid>
        <Grid item xs={8}>
          <div>
            <Map programs={programs} />
          </div>
        </Grid>
      </Grid>
    </div >
  );
};
export default SearchPrograms;
