import React from 'react';
import '../css/searchBox.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <div className='searchBox'>
        <h2>{this.props.name}</h2>
        <form onSubmit={(e) => (this.props.searchClick(e, this.state))}>
          <input 
            name='location' 
            type='text'
            onChange={this.handleInputChange}
            placeholder='Search'/>
          <input type='submit' value='Submit' className='searchButton'/>
        </form>
      </div>
    );
  }
}

export default SearchBox;