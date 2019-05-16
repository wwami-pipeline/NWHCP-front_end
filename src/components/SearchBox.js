import React from 'react';
import '../css/searchBox.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: ''
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
      <div className='searchComp'>
        <h3>{this.props.name}</h3>
        <form className='searchForm' onSubmit={(e) => (this.props.searchClick(e, this.state))}>
          <input 
            className='searchInput'
            name='searchContent' 
            type='text'
            onChange={this.handleInputChange}
            placeholder={this.props.placeholder}/>
          <input type='submit' value='Search' className='searchButton primaryButton'/>
        </form>
      </div>
    );
  }
}

export default SearchBox;