// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Dashboard </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/user" className="nav-link">User Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/table" className="nav-link">Table List</Link>
        </Nav.Item>
        {/* Add more nav items here */}
      </Nav>
    </div>
  );
}

export default Sidebar;
