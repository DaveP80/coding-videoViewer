import React from 'react';
import './SearchBar.css';
let ic= require('./info.png');

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
            <div className='field-title'>
            <label>
              <h1>Most recent coding videos</h1>
            </label>
            </div>
            <div className='icon'>
                <img src={(ic)} alt='ic'></img>
                    </div>
            <div className="onhovertip">query must include a programming language!</div>
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