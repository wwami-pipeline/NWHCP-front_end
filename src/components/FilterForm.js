import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      CareerEmp: '',
      HasCost: false,
      Under18: false,
      HasTransport: false,
      HasCert: false,
      GradeLevels: 10
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(value);
    console.log(name);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={(e) => (this.props.submit(e, this.state))}>
        <input
          name="location"
          type="text"
          value={this.state.location}
          onChange={this.handleInputChange}
          placeholder='Enter City or ZIP' />
        <br />
        <label>
          Career Emphasis: 
          <select name='CareerEmp' onChange={this.handleInputChange}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
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
        <label>
          Grade Level: 
          <input
            name="GradeLevels"
            type="number"
            min='6'
            max='12'
            value={this.state.GradeLevels}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FilterForm;
