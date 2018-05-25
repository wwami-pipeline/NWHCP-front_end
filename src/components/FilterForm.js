import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const careers = [
  'Medicine',
  'Nursing',
  'Dentistry',
  'Pharmacy',
  'Social Work',
  'Public Health',
  'General Health Sciences',
  'Allied Health',
  'STEM',
  'Other'
];

const gradeLevels = [
  'Middle School',
  'High School',
  'Community College/Technical Schools',
  'Undergraduates',
  'Post Bacc'
];

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7b59b3',
      main: '#4b2e83',
      dark: '#1a0555',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ead6a9',
      main: '#b7a57a',
      dark: '#867643e',
      contrastText: '#000',
    },
  },
});


class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      CareerEmp: [],
      HasCost: false,
      Under18: false,
      HasTransport: false,
      HasShadow: false,
      GradeLevels: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='filterForm'>
        <form onSubmit={(e) => (this.props.submit(e, this.state))}>
          <input
            name="location"
            type="text"
            className='searchInput'
            value={this.state.location}
            onChange={this.handleInputChange}
            placeholder='Enter City or ZIP' />
          <MuiThemeProvider theme={theme}>
            <div className='multiSelects'>
              <div className='select'>
                <FormControl>
                  <InputLabel htmlFor="select-multiple-checkbox">Career Emphasis</InputLabel>
                    <Select
                      name='CareerEmp'
                      multiple
                      value={this.state.CareerEmp}
                      onChange={this.handleInputChange}
                      input={<Input id="select-multiple-checkbox" />}
                      renderValue={selected => selected.join(', ')}
                    >
                    {careers.map(career => (
                      <MenuItem key={career} value={career}>
                        <Checkbox checked={this.state.CareerEmp.indexOf(career) > -1} />
                        <ListItemText primary={career} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <br />
              <FormControl>
                <InputLabel htmlFor="select-multiple-checkbox" className='selectInput'>Grade Level</InputLabel>
                  <Select
                    name='GradeLevels'
                    multiple
                    value={this.state.GradeLevels}
                    onChange={this.handleInputChange}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                  >
                  {gradeLevels.map(level => (
                    <MenuItem key={level} value={level}>
                      <Checkbox checked={this.state.GradeLevels.indexOf(level) > -1} />
                      <ListItemText primary={level} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </div>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.HasCost}
                  onChange={this.handleInputChange}
                  name='HasCost'/>
                }
              label='Free Enrollment'/>            
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.Under18}
                  onChange={this.handleInputChange}
                  name='Under18'/>
                }
              label='Youth Program'/>          
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.HasTransport}
                  onChange={this.handleInputChange}
                  name='HasTransport'/>
                }
              label='Provides Transportation'/>          
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.HasShadow}
                  onChange={this.handleInputChange}
                  name='HasShadow'/>
                }
              label='Provides Shadowing Opportunites'/>
            <br />
            </MuiThemeProvider>
          <br />
          <input type='submit' value='Find Programs' className='findPrograms'/>
        </form>
      </div>
    );
  }
}

export default FilterForm;
