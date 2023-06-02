import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Dashboard />
        
      </div>
    </Router>
  );
}

export default App;
