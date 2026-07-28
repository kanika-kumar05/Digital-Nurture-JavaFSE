import React from 'react';
import { Link } from 'react-router-dom';

const trainers = [
  { id: 1, name: 'John Doe', skill: 'React JS' },
  { id: 2, name: 'Jane Smith', skill: 'Angular' },
  { id: 3, name: 'Bob Johnson', skill: 'Spring Boot' }
];

const TrainersList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Trainers</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {trainers.map(t => (
          <li key={t.id} style={{ margin: '10px 0' }}>
            <Link to={`/trainers/${t.id}`} style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              {t.name} - {t.skill}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
