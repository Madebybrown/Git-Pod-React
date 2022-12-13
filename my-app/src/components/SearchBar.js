import React, { Component } from 'react';
import importedNames from './Names';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       names: importedNames,
    };
  }

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    const filteredNames = importedNames.filter((name) => (
      name.toLowerCase().includes(inputText)
    ));

    // Update the state with the filtered names
    this.setState({ names: filteredNames });
  };

  render() {
    return (
      <div>
        <h1>Name Search:</h1>
        <p>matching names found: {this.state.names.length}</p>
        <form>
          <input 
            type="text" 
            placeholder="search names..." 
            onChange={(event) => this.handleChange(event)}
          />
        </form>
        <div style={{margin: 'auto'}}>
          {this.state.names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
