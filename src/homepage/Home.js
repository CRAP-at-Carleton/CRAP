import React from 'react';
import HeaderBar from './HeaderBar'
import NavRow from './NavRow'
import './Home.css';

class Home extends React.Component {
  render() {
    let depts = ['Computer Science', 'English', 'Chemistry', 'Math', 'Basket Weaving', 'Music'];
    let periods = ['1a', '2a', '3a', '4a', '5a', '6a'];
    let types = ['100', '200', '300', 'Independent Study', 'Off-Campus', 'Comps'];

    return (
      <div>
      <HeaderBar />
      <NavRow category="Department" parity="even" tiledata={depts}/>
      <NavRow category="Period" parity="odd" tiledata={periods}/>
      <NavRow category="Type" parity="even" tiledata={types}/>
      <button> Browse All </button>
      </div>
    );
  }
}

export default Home;
