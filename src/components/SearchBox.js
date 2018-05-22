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
        <h3>{this.props.name}</h3>
        <form className='searchForm' onSubmit={(e) => (this.props.searchClick(e, this.state))}>
          <input 
            className='searchInput'
            name='location' 
            type='text'
            onChange={this.handleInputChange}
            placeholder={this.props.placeholder}/>
          <input type='submit' value='Search' className='searchButton'/>
        </form>
      </div>
    );
  }
}

export default SearchBox;