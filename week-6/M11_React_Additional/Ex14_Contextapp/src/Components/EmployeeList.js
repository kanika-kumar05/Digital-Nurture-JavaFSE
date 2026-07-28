import React from 'react';
import EmployeeCard from './EmployeeCard';

const mockEmployees = [
  { id: 101, name: 'Alice Cooper', role: 'Developer' },
  { id: 102, name: 'Bob Dylan', role: 'Designer' },
  { id: 103, name: 'Charlie Puth', role: 'Manager' }
];

const EmployeeList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Employee Directory</h2>
      <div style={{ display: 'flex' }}>
        {mockEmployees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
