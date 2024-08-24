// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css'; // You can add custom styles here

function App() {
  return (
    <Router>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
