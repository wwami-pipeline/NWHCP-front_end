import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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


class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      CareerEmp: [],
      HasCost: false,
      Under18: false,
      HasTransport: false,
      HasCert: false,
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
            value={this.state.location}
            onChange={this.handleInputChange}
            placeholder='Enter City or ZIP' />
          <br />
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
          <br />
          <label>
            <input
              name="HasCost"
              type="checkbox"
              checked={this.state.HasCost}
              onChange={this.handleInputChange} />
              Free Enrollment
          </label>
          <br />
          <label>
            <input
              name="Under18"
              type="checkbox"
              checked={this.state.Under18}
              onChange={this.handleInputChange} />
              Youth Program
          </label>
          <br />
          <label>
            <input
              name="HasTransport"
              type="checkbox"
              checked={this.state.HasTransport}
              onChange={this.handleInputChange} />
              Provides Transportation
          </label>
          <br />
          <label>
            <input
              name="HasCert"
              type="checkbox"
              checked={this.state.HasCert}
              onChange={this.handleInputChange} />
              Certification Program
          </label>
          <br />
          <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">Grade Level</InputLabel>
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
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FilterForm;
