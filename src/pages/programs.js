import React, { useState, useEffect } from "react";
import SearchForm from "../components/Programs/SearchForm";
import ProgramCard from "../components/Programs/ProgramCard";
import Map from "../components/Programs/Map";
const fetchPrograms = (formData, setPrograms, setLoading, setError) => {
  setLoading(true);
  console.log("Fetching data...");
  // fetch("https://140.142.142.156/api/v3/search", {
  fetch("https://140.142.142.156/api/v3/orgs-all", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          console.log("Data fetched successfully!");
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
      // console.log("Fetched data: ", result);
      setPrograms(result);
    })
    .catch((error) => {
      console.log("Could not fetch data... " + error.message);
      setError(error);
    })
    .finally(setLoading(false));
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
    searchContent: "",
    CareerEmp: [],
    HasCost: false,
    Under18: false,
    HasTransport: false,
    HasShadow: false,
    GradeLevels: getUrlParams(),
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
        <div key={index}>
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
    <div>
      <SearchForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <Map programs={programs} />
      <div className="mt-5">
        <h3 className="text-center text-primary mb-5">
          Found {programs.length} programs
        </h3>
        {loading ? (
          <p>Loading Programs...</p>
        ) : error ? (
          <p>Error fetching programs...</p>
        ) : (
          <RenderPrograms programs={programs} />
        )}
      </div>
    </div>
  );
};
export default SearchPrograms;
