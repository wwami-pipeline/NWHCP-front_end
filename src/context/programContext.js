import createContext from './createData';
import * as api from "../api/api"

const programReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATES_PROGRAMS': {
      const newState = { ...state };
      newState.allPrograms = [];
      action.payload.forEach((program) => {
        newState.byId[program._id] = program;
        newState.allPrograms.push(program);
        newState.filteredProgram = newState.allPrograms;
      });
      return newState;
    };
    case 'CLEAR_FILTER_PROGRAM': {
      const newState = { ...state }
      newState.filteredProgram = state.allPrograms;
      return newState;
    };
    case 'CLEAR_FILTER': {
      const newState = { ...state }
      newState.searchFilter = {
        searchContent: "",
        location: "",
        careerEmp: [],
        programType: [],
        gradeLevels: [],
        duration: [],
        advanced: [],
      }
      return newState;
    };
    case 'UPDATE_FILTERED_PROGRAMS': {
      const newState = { ...state };
      if (state.searchFilter.location !== "") {
        newState.filteredProgram = state.allPrograms.filter(el => el?.org_state.toLowerCase() === state.searchFilter.location.toLowerCase());
      } else {
        newState.filteredProgram = state.allPrograms;
      }

      const keyword = state.searchFilter.searchContent.toLowerCase();
      if (keyword !== undefined && keyword.length !== 0) {
        newState.filteredProgram = newState.filteredProgram.filter((program) => {
          let text = "";
          for (const attribute in program) {
            if (!["1", "0", "", 1, 0].includes(program[attribute])) {
              text += " " + String(program[attribute]).toLowerCase();
            }
          }
          return text.search(keyword) !== -1;
        });
      }

      const eduLevels = state.searchFilter.gradeLevels;
      if (eduLevels !== undefined && eduLevels.length !== 0) {
        // console.log(eduLevels)
        newState.filteredProgram = newState.filteredProgram.filter((program) => {
          for (const attribute in program) {
            if (
              attribute.includes("target_school_age") &&
              program[attribute] === "1" &&
              eduLevels.some((element) => attribute.includes(element))
            ) {
              return true;
            }
          }
          return false;
        });
      }

      const careerEmp = state.searchFilter.careerEmp;
      if (careerEmp !== undefined && careerEmp.length !== 0) {
        newState.filteredProgram = newState.filteredProgram.filter((program) => {
          for (const attribute in program) {
            if (
              attribute.includes("career_emp") &&
              program[attribute] === "1" &&
              careerEmp.some((element) => attribute.includes(element))
            ) {
              return true
            }
          }
          return false;
        });
      }

      const timing = state.searchFilter.duration;
      if (timing !== undefined && timing.length !== 0) {
        newState.filteredProgram = newState.filteredProgram.filter((program) => {
          for (const attribute in program) {
            if (
              attribute.includes("program_duration") &&
              program[attribute] === "1" &&
              timing.some((element) => attribute.includes(element))
            ) {
              return true
            }
          }
          return false;
        });
      }

      const advanced = state.searchFilter.advanced;
      if (advanced !== undefined && advanced.length !== 0) {
        newState.filteredProgram = newState.filteredProgram.filter((program) => {
          for (const el of advanced) {
            if (program[el] === "1") {
              return true;
            }
          }
          return false;
        })
      }

      return newState;
    };
    case 'UPDATE_FILTER': {
      const newState = { ...state };
      newState.searchFilter = action.payload;
      return newState;
    };
    case 'UPDATE_LOCATION_FILTER': {
      const newState = { ...state };
      newState.searchFilter = {
        ...state.searchFilter,
        location: action.payload
      }
      return newState;
    };
    default:
      return state;
  }
}

const populateProgram = (programs) => ({
  type: 'POPULATES_PROGRAMS',
  payload: programs
});

const udpateFilteredProgram = () => ({
  type: 'UPDATE_FILTERED_PROGRAMS'
})

const updateFilterReducer = (newFilter) => ({
  type: "UPDATE_FILTER",
  payload: newFilter
})

const updateLocationReducer = (newlocation) => ({
  type: "UPDATE_LOCATION_FILTER",
  payload: newlocation,
})

const clearFilterReducer = () => ({
  type: "CLEAR_FILTER"
})

const clearFilterProgramReducer = () => ({
  type: "CLEAR_FILTER_PROGRAM"
})


const fetchAllPrograms = (dispatch) => {
  return async () => {
    const res = await api.getAllPrograms();
    res.forEach(program => modifyReturnProgram(program));
    dispatch(populateProgram(res));
  }
}

const updateFilter = (dispatch) => {
  return (newFilter) => {
    dispatch(updateFilterReducer(newFilter))
    dispatch(udpateFilteredProgram())
  }
}

const clearAll = (dispatch) => {
  return () => {
    dispatch(clearFilterReducer())
    dispatch(clearFilterProgramReducer())
  }
}

const updateFilterLocation = (dispatch) => {
  return (location) => {
    console.log(location)
    // dispatch(updateFilters(newFilter))
    dispatch(updateLocationReducer(location))
    dispatch(udpateFilteredProgram())
  }
}

export const { Context, Provider } = createContext(
  programReducer,
  {
    fetchAllPrograms,
    updateFilterLocation,
    updateFilter,
    clearAll,
  },
  {
    byId: {},
    filteredProgram: [],
    allPrograms: [],
    searchFilter: {
      searchContent: "",
      location: "",
      careerEmp: [],
      programType: [],
      gradeLev: [],
      durations: [],
      finanSprt: [],
      shadOppt: [],
      advanceds: [],
      required: [],
    }
  }
);

function remove(str) {
  return str.replace("_v2", "");
}

function modifyReturnProgram(obj) {
  Object.keys(obj).forEach(function (el) {
    if (el.includes("_v2")) {
      if (obj[el] === "0" || obj[el] === "1") {
        obj[remove(el)] = String(Number(obj[el]) | Number(obj[remove(el)]));
      } else {
        if (obj[remove(el)] === undefined) {
          obj[remove(el)] = obj[el];
        } else {
          obj[remove(el)] = obj[el] + obj[remove(el)];
        }
      }
      delete obj[el];
    }
  });
}