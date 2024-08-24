// src/components/MainContent.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';
import TableList from './TableList';

function MainContent() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/table" element={<TableList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Container>
  );
}

export default MainContent;
