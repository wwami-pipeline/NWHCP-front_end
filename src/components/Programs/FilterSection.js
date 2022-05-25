import { Grid, Typography, MenuItem, TextField, IconButton, Button, ListSubheader, Tooltip, Dialog, Collapse } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { bounds as defaultBound, defaultAllBound } from "../../../static/stateCoordinate";

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import { Context as AllProgramConText } from "../../context/programContext"
import CateList from "./cateSelect";
import { careers, gradeLevels, advanced } from "../../shared/filters";

export default function ProgramFilterSection({ setBounds }) {
  const [location, setLocation] = useState("");
  const [openfilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState({})
  const [openAdvance, setOpenAdvance] = useState(false);

  const {
    updateFilterLocation,
    clearAll,
    updateFilter
  } = useContext(AllProgramConText);

  const curfilter = useContext(AllProgramConText).state.searchFilter;

  useEffect(() => {
    setFilter(curfilter)
  }, [curfilter]);

  const handleSearchContent = (e) => {
    setFilter((prev) => ({ ...prev, searchContent: e.target.value }))
  }

  const submitSearch = () => {
    updateFilter(filter);
  }

  const submitClear = () => {
    setBounds(defaultAllBound);
    setLocation("");
    clearAll();
  }

  const handleSelect = (event) => {
    updateFilterLocation(event.target.value);
    setLocation(event.target.value);
    if (event.target.value == "") {
      setBounds(defaultAllBound)
    } else {
      const newBound = defaultBound.find((el) => el.NAME == event.target.value);
      setBounds([[newBound.ymin, newBound.xmin], [newBound.ymax, newBound.xmax]])
    }
  };

  return (
    <>
      <Grid container>
        <Grid container>
          <Typography variant="h2" style={{ fontWeight: 700, fontSize: "24px", color: "#004978" }}>Find your Career Path</Typography>
          {/* <button onClick={() => console.log(filter)}>debug filter</button> */}
        </Grid>
        <Grid container alignContent={"center"} spacing={1} style={{ padding: "20px 12px" }}>
          <Grid item xs={2} className="dropdown">
            <Button variant="outlined" onClick={() => setOpenFilter(!openfilter)} fullWidth style={{ height: "100%", borderRadius: 8 }}>
              <Typography variant='body1' style={{ color: "#004987" }}>{!openfilter ? "Open Filter" : "Close Filter"}</Typography>
            </Button>
          </Grid>
          <Grid item xs={2} className='type'>
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
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem>Health Professional School and Training Program</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem>Pathway</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3} className="Location">
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
          </Grid>
          <Grid item xs={5} className="Search">
            <Grid container>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label="Search programs"
                  variant="outlined"
                  placeholder="name, contact, academic credit, location..."
                  focused
                  name="searchContent"
                  onChange={handleSearchContent}
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      submitSearch()
                    }
                  }}
                  value={filter?.searchContent}
                ></TextField>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="Search">
                  <IconButton style={{ height: "100%" }} onClick={() => submitSearch()}>
                    <SearchIcon style={{ width: 40 }} />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="Clear Search">
                  <IconButton style={{ height: "100%" }} onClick={() => submitClear()}>
                    <ClearIcon style={{ width: 40 }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          {/* Advance Filter go here */}
          <Collapse in={openfilter}>
            <Grid container style={{ padding: 8 }}>
              <Grid container justifyContent={"space-between"} style={{ marginTop: 24, marginBottom: 10 }}>
                <Grid xs={4}>
                  <Grid container>
                    <Typography variant='h6'>Search Filter</Typography>
                  </Grid>
                  <Typography variant='caption'>Select Filter and Search</Typography>
                </Grid>
                <Grid>
                  <Button onClick={() => setOpenAdvance(!openAdvance)}>
                    <Typography>{openAdvance ? "Close Advanced Search" : "Open Advanced Search"}</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container>
                  <Typography variant="body1" gutterBottom>Select education level</Typography>
                </Grid>
                <Grid style={{ marginBottom: 14 }}>
                  <CateList cates={gradeLevels} selected={filter.gradeLevels} handleChoose={(label) => {
                    if (filter.gradeLevels.includes(label)) {
                      let newGradelevel = filter.gradeLevels;
                      newGradelevel = newGradelevel.filter(el => el != label);
                      setFilter((prev) => ({
                        ...prev,
                        gradeLevels: newGradelevel
                      }
                      ))
                    } else {
                      let newGradelevel = filter.gradeLevels;
                      newGradelevel.push(label)
                      setFilter((prev) => ({
                        ...prev,
                        gradeLevels: newGradelevel
                      }));
                    }
                  }}></CateList>
                </Grid>
                <Grid container>
                  <Grid container>
                    <Typography variant="body1" gutterBottom>Select career emphasis</Typography>
                  </Grid>
                  <CateList cates={careers} selected={filter.careerEmp} handleChoose={(label) => {
                    if (filter.careerEmp.includes(label)) {
                      let newCareerEmp = filter.careerEmp;
                      newCareerEmp = newCareerEmp.filter(el => el != label);
                      setFilter((prev) => ({
                        ...prev,
                        careerEmp: newCareerEmp
                      }
                      ))
                    } else {
                      let newCareerEmp = filter.careerEmp;
                      newCareerEmp.push(label)
                      setFilter((prev) => ({
                        ...prev,
                        careerEmp: newCareerEmp
                      }));
                    }
                  }}></CateList>
                </Grid>
                <Collapse in={openAdvance}>
                  <Grid container style={{ marginTop: 14 }}>
                    <Grid container>
                      <Typography variant="body1" gutterBottom>Advanced check</Typography>
                    </Grid>
                    <Grid style={{ marginBottom: 14 }}>
                      <CateList cates={advanced} selected={filter.advanced} handleChoose={(label) => {
                        if (filter.advanced.includes(label)) {
                          let newAdvance = filter.advanced;
                          newAdvance = newAdvance.filter(el => el != label);
                          setFilter((prev) => ({
                            ...prev,
                            advanced: newAdvance
                          }
                          ))
                        } else {
                          let newAdvance = filter.advanced;
                          newAdvance.push(label)
                          setFilter((prev) => ({
                            ...prev,
                            advanced: newAdvance
                          }));
                        }
                      }}></CateList>
                    </Grid>
                  </Grid>
                </Collapse>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </>
  )
}