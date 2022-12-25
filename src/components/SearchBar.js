import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    
  };
  
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              <h1>Most recent coding videos</h1>
            </label>
            <div className='wmrk'>
                <h4>Davep80</h4>
                </div>
            <input
              type="text"
              placeholder='javascript|python|java|react|c++|typescript'
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="fluid ui red button mt">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;