import React from 'react';
import './searchBox.css';
import FilterForm from './FilterForm'
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.receiveDataFromFilter = this.receiveDataFromFilter.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  receiveDataFromFilter(filterKeys) {
    this.setState(filterKeys)
  }
  
  render() {
    return (
      <div className=''>
        <ul className="searchComp collapsible popout">
          <li>
            <div className="row">
              <div className="col s3 m2 l1" style={{minWidth: 65+'px'}}>
                <div className="valign-wrapper center-align">
                  <div class="collapsible-header valign-wrapper center-align">
                    <svg className="collapsible-indicator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                      version="1.1" width='21' height='21' fill="#2B5F9E">
                        <path d="M 50,50 5,95 5,5 z"/>
                      </svg>Filters
                  </div>
                </div>
                
              </div>
              <div className="col s9 m10 l11">
                <form className='searchForm' onSubmit={(e) => (this.props.searchClick(e, this.state))
                  }>
                  <input 
                    className='searchInput center'
                    name='searchContent' 
                    type='text'
                    onChange={this.handleInputChange}
                    placeholder={this.props.placeholder}/>
                  <input type='submit' value='Search' className='searchButton primaryButton'/>
                </form>
              </div>
            </div>
            
            
            <div class="collapsible-body">
              <div><FilterForm onNewFilterKey={this.receiveDataFromFilter}/></div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBox;