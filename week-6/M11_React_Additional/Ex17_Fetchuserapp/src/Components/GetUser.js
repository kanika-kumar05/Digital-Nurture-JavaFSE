import React, { Component } from 'react';

class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ user: data.results[0], loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
    }

    if (error) {
      return <div style={{ textAlign: 'center', color: 'red' }}>Error: {error}</div>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial' }}>
        <h2>User Details</h2>
        {user && (
          <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} avatar`} 
              style={{ borderRadius: '50%', marginBottom: '15px' }}
            />
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default GetUser;
