// src/components/TableList.js
import React from 'react';
import { Table } from 'react-bootstrap';

function TableList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>Doe</td>
          <td>@johndoe</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
          <td>Doe</td>
          <td>@janedoe</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
}

export default TableList;
