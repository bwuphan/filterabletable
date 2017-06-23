import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Table from './Table';
import Search from './Search';
import filterHelper from './filterHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      data,
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({'searchText': e.target.value});
  }
  render() {
    const data = filterHelper(this.state.data, this.state.searchText);
    return (
      <div className="App">
        <Search onChange={this.onChange} />
        <Table data={data} />
      </div>
    );
  }
}

export default App;
