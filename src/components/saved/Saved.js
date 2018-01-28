import React from 'react';
import HeaderBar from '../homepage/HeaderBar'

class Saved extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <h1>This is a calendar!</h1>
        <button> Browse All </button>
      </div>
    );
  }
}

export default Saved;