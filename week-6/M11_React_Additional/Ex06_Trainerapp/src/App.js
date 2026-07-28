import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import TrainersList from './Components/TrainersList';
import TrainerDetail from './Components/TrainerDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '15px', backgroundColor: '#333', color: 'white', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/trainers" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Trainers</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainers/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
