import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);
  
  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: theme === 'dark' ? '#333' : '#e0e0e0',
    color: theme === 'dark' ? '#fff' : '#000'
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '15px', borderRadius: '5px' }}>
      <h3>{employee.name}</h3>
      <p>ID: {employee.id}</p>
      <p>Role: {employee.role}</p>
      <button style={buttonStyle}>View Details</button>
    </div>
  );
};

export default EmployeeCard;
