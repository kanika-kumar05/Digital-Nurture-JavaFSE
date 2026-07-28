import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockData = {
  1: { name: 'John Doe', skill: 'React JS', email: 'john@example.com', experience: '5 Years' },
  2: { name: 'Jane Smith', skill: 'Angular', email: 'jane@example.com', experience: '8 Years' },
  3: { name: 'Bob Johnson', skill: 'Spring Boot', email: 'bob@example.com', experience: '10 Years' }
};

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = mockData[id];

  if (!trainer) {
    return <h2 style={{ padding: '20px' }}>Trainer Not Found!</h2>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '5px', textAlign: 'left', maxWidth: '400px' }}>
      <h2>Trainer Details</h2>
      <hr />
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Skill:</strong> {trainer.skill}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Experience:</strong> {trainer.experience}</p>
      
      <div style={{ marginTop: '30px' }}>
        <Link to="/trainers" style={{ padding: '8px 15px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '3px' }}>Back to List</Link>
      </div>
    </div>
  );
};

export default TrainerDetail;
