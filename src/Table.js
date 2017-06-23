import React from 'react';

const Table = ({ data }) =>
  <table>
    <tr>
      <th>id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>IP Address</th>
    </tr>
    {data.map(person =>
      <tr>
        <th>{person.id}</th>
        <th>{person.first_name}</th>
        <th>{person.last_name}</th>
        <th>{person.email}</th>
        <th>{person.gender}</th>
        <th>{person.ip_address}</th>
      </tr>
    )}
  </table>

export default Table;