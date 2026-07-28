import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [empName, setEmpName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNum = Math.floor(Math.random() * 10000);
    alert(`Thanks ${empName}\nYour Complaint was Submitted.\nReference Number is: ${refNum}`);
    setEmpName('');
    setComplaint('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Register your complaints</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name of Employee:</label>
          <input 
            type="text" 
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Complaint:</label>
          <textarea 
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="5"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
