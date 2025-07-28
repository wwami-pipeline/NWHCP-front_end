import {
  Grid,
  Typography,
  TextField,
  IconButton,
  Button,
  Tooltip,
  Collapse,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useContext, useState, useEffect } from "react";
import { defaultAllBound } from "../../../static/stateCoordinate";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { Context as AllProgramConText } from "../../context/programContext";
import CateList from "./cateSelect";
import {
  careers,
  gradeLevels,
  advanced,
  duration as configDuration,
  financialSupport,
  shadowOppt,
} from "../../shared/filters";

export default function ProgramFilterSection({ setBounds }) {
  // const [location, setLocation] = useState("");
  const [openfilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState({});
  const [openAdvance, setOpenAdvance] = useState(false);

  const { clearAll, updateFilter } = useContext(AllProgramConText);

  const curfilter = useContext(AllProgramConText).state.searchFilter;

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    setFilter(curfilter);
  }, [curfilter]);

  const handleSearchContent = (e) => {
    setFilter((prev) => ({ ...prev, searchContent: e.target.value }));
  };

  const submitSearch = () => {
    updateFilter(filter);
  };

  const submitClear = () => {
    setBounds(defaultAllBound);
    // setLocation("");
    clearAll();
  };

  // const handleSelect = (event) => {
  //   updateFilterLocation(event.target.value);
  //   setLocation(event.target.value);
  //   if (event.target.value === "") {
  //     setBounds(defaultAllBound)
  //   } else {
  //     const newBound = defaultBound.find((el) => el.NAME === event.target.value);
  //     setBounds([[newBound.ymin, newBound.xmin], [newBound.ymax, newBound.xmax]])
  //   }
  // };

  const handleFilterChange = (filterName, label) => {
    let currFilterArr = filter[filterName] || [];
    let newFilterArr = [...currFilterArr];

    if (currFilterArr.includes(label)) {
      newFilterArr = newFilterArr.filter((el) => el !== label);
    } else {
      newFilterArr.push(label);
    }

    setFilter((prev) => ({
      ...prev,
      [filterName]: newFilterArr,
    }));

    updateFilter({
      ...filter,
      [filterName]: newFilterArr,
    });
  };

  const accordionStyle = {
    width: '90%', 
    maxWidth: '100%',
    marginLeft: '8px',
    marginRight: '8px',
    marginBottom: '8px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
  };

  return (
    <>
      <Grid container>
        <Grid container>
          <Typography
            variant="h2"
            style={{ fontWeight: 700, fontSize: "24px", color: "#004978" }}
          >
            Find your Career Path
          </Typography>
          {/* <button onClick={() => console.log(filter)}>debug filter</button> */}
        </Grid>
        <Grid
          container
          alignContent={"center"}
          spacing={1}
          style={{ padding: "20px 12px" }}
        >
          {!isMobile && (
            <Grid item xs={2} className="dropdown">
              <Button
                variant="outlined"
                onClick={() => setOpenFilter(!openfilter)}
                fullWidth
                style={{
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "#004987",
                }}
              >
                <Typography variant="body1" style={{ color: "#FFFFFF" }}>
                  {!openfilter ? "More Filters" : "Fewer Filters"}
                </Typography>
              </Button>
            </Grid>
          )}
          {/* <Grid item xs={2} className='type'>
            <TextField
              select
              label="Program Type" fullWidth
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
            >
              <MenuItem>All</MenuItem>
              <ListSubheader>Health Professional School and Training Program</ListSubheader>
              <MenuItem>This filter is comming soon</MenuItem>
              <ListSubheader>Pathway</ListSubheader>
              <MenuItem>This filter is comming soon</MenuItem>
            </TextField>
          </Grid> */}
          {/* <Grid item xs={3} className="Location">
            <TextField
              select
              color="primary"
              fullWidth
              label="Location"
              defaultValue={""}
              onChange={handleSelect}
              value={location}
            >
              <MenuItem value={""}>All</MenuItem>
              {defaultBound && defaultBound.map((e, i) => (<MenuItem value={e.NAME} key={i}>{e.NAME}</MenuItem>))}
            </TextField>
          </Grid> */}
          <Grid item xs={10} className="Search">
            <Grid container>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label="Search programs"
                  variant="outlined"
                  placeholder="program name or location..."
                  focused
                  name="searchContent"
                  onChange={handleSearchContent}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      submitSearch();
                    }
                  }}
                  value={filter?.searchContent || ""}
                ></TextField>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="Search">
                  <IconButton
                    style={{ height: "100%" }}
                    onClick={() => submitSearch()}
                  >
                    <SearchIcon style={{ width: 40 }} />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="Clear Search">
                  <IconButton
                    style={{ height: "100%" }}
                    onClick={() => submitClear()}
                  >
                    <ClearIcon style={{ width: 40 }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>

          {isMobile ? (
            <Grid container>
              <Grid item xs={12}>
                <Accordion style={{ width: "100%", maxWidth: "100%", marginBottom: '8px', marginTop: '8px' }}>
                  <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Career Emphasis</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CateList
                    cates={careers}
                    selected={filter.careerEmp}
                    handleChoose={(label) =>
                      handleFilterChange("careerEmp", label)
                    }
                    ></CateList>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion style={{ width: '100%', maxWidth: '100%', marginBottom: '8px' }}>
                  <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Education Level</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CateList
                      cates={gradeLevels}
                      selected={filter.gradeLevels}
                      handleChoose={(label) =>
                        handleFilterChange('gradeLevels', label)
                      }
                    ></CateList>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion style={{ width: '100%', maxWidth: '100%', marginBottom: '8px' }}>
                  <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Timing</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CateList
                      cates={configDuration}
                      selected={filter.duration}
                      handleChoose={(label) =>
                        handleFilterChange('duration', label)
                      }
                    ></CateList>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion style={{ width: '100%', maxWidth: '100%' }}>
                  <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                    <Typography>More Filters</Typography>
                  </AccordionSummary>
                  <Accordion style={accordionStyle}>
                    <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                      <Typography>Fees/Financial Support</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CateList
                        cates={financialSupport}
                        selected={filter.finanSprt}
                        handleChoose={(label) => handleFilterChange('finanSprt', label)}
                      ></CateList>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={accordionStyle}>
                    <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                      <Typography>Shadowing Opportunities</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CateList
                        cates={shadowOppt}
                        selected={filter.shadOppt}
                        handleChoose={(label) => handleFilterChange('shadOppt', label)}
                      ></CateList>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={accordionStyle}>
                    <AccordionSummary variant="h6" expandIcon={<ExpandMoreIcon />}>
                      <Typography>Miscellaneous</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CateList
                        cates={advanced}
                        selected={filter.advanced}
                        handleChoose={(label) => handleFilterChange('advanced', label)}
                      ></CateList>
                    </AccordionDetails>
                  </Accordion>
                </Accordion>
              </Grid>
            </Grid>
          ) : (
            <Grid xs={10} ml={"auto"} pl={2}>
              <div>
                {" "}
                <Grid container>
                  {/* Start of filtering categories */}
                  <Grid item xs={4}>
                    <Grid container>
                      <Typography variant="h6" gutterBottom>
                        Career Emphasis
                      </Typography>
                    </Grid>
                    <Grid style={{ marginBottom: 14 }}>
                      <CateList
                        cates={careers}
                        selected={filter.careerEmp}
                        handleChoose={(label) =>
                          handleFilterChange("careerEmp", label)
                        }
                      ></CateList>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container>
                      <Typography variant="h6" gutterBottom>
                        Education Level
                      </Typography>
                    </Grid>
                    <Grid style={{ marginBottom: 14 }}>
                      <CateList
                        cates={gradeLevels}
                        selected={filter.gradeLevels}
                        handleChoose={(label) =>
                          handleFilterChange("gradeLevels", label)
                        }
                      ></CateList>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container>
                      <Typography variant="h6" gutterBottom>
                        Timing
                      </Typography>
                    </Grid>
                    <Grid style={{ marginBottom: 14 }}>
                      <CateList
                        cates={configDuration}
                        selected={filter.duration}
                        handleChoose={(label) =>
                          handleFilterChange("duration", label)
                        }
                      ></CateList>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Advance Filter go here */}
                <Collapse in={openfilter} style={{ width: "100%" }}>
                  <Grid container style={{ padding: 8 }}>
                    {/* <Grid
                  container
                  justifyContent={"flex-end"}
                  style={{ marginBottom: 10 }}
                >
                  <Grid xs={4}>
                    <Grid container>
                      <Typography variant='h6'>Search Filter</Typography>
                    </Grid>
                    <Typography variant='caption'>Select Filter and Search</Typography>
                  </Grid>
                  <Grid item className="dropdown">
                    <Button
                      disabled={!openfilter}
                      onClick={() => setOpenAdvance(!openAdvance)}
                      fullWidth
                      style={{ height: "100%", borderRadius: 8 }}
                    >
                      <Typography variant="body1">
                        {openAdvance
                          ? "Close Advanced Search"
                          : "Open Advanced Search"}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid> */}
                    {/* New filtering categories */}
                    <Grid container>
                      <Grid item xs={4}>
                        <Grid container>
                          <Typography variant="h6" gutterBottom>
                            Fees/Financial Support
                          </Typography>
                        </Grid>
                        <Grid style={{ marginBottom: 14 }}>
                          <CateList
                            cates={financialSupport}
                            selected={filter.finanSprt}
                            handleChoose={(label) =>
                              handleFilterChange("finanSprt", label)
                            }
                          ></CateList>
                        </Grid>
                      </Grid>

                      <Grid item xs={4}>
                        <Grid container>
                          <Typography variant="h6" gutterBottom>
                            Shadowing Opportunities
                          </Typography>
                        </Grid>
                        <Grid style={{ marginBottom: 14 }}>
                          <CateList
                            cates={shadowOppt}
                            selected={filter.shadOppt}
                            handleChoose={(label) =>
                              handleFilterChange("shadOppt", label)
                            }
                          ></CateList>
                        </Grid>
                      </Grid>

                      <Grid item xs={4}>
                        <Grid container>
                          <Typography variant="h6" gutterBottom>
                            Miscellaneous
                          </Typography>
                        </Grid>
                        <Grid style={{ marginBottom: 14 }}>
                          <CateList
                            cates={advanced}
                            selected={filter.advanced}
                            handleChoose={(label) =>
                              handleFilterChange("advanced", label)
                            }
                          ></CateList>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Collapse>{" "}
              </div>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
