import React from 'react';

const Search = ({ onChange }) =>
  <input type="text" placeholder="Enter Search" onChange={e => onChange(e)}/>

export default Search