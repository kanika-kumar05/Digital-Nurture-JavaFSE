import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
        <h2>Counter App</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
          <button 
            onClick={this.UpdateEntry}
            style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Login
          </button>
          <span>{this.state.entrycount} People Entered</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
          <button 
            onClick={this.UpdateExit}
            style={{ padding: '10px 20px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Exit
          </button>
          <span>{this.state.exitcount} People Left</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
