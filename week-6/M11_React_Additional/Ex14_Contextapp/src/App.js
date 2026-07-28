import React, { useState } from 'react';
import ThemeContext from './Components/ThemeContext';
import EmployeeList from './Components/EmployeeList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh', background: theme === 'dark' ? '#222' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
        <h1>App Centric Solutions</h1>
        <button 
          onClick={toggleTheme} 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Toggle Theme ({theme})
        </button>
        <hr style={{ margin: '20px 0' }} />
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
