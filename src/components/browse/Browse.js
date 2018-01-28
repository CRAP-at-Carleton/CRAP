import React from 'react';
import HeaderBar from '../homepage/HeaderBar'
import SideBar from './SideBar'
import Grid from './Grid'
import './Browse.css';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: {
        dept: [],
        type: [],
        period: []
      }
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(type, value, selected) {
    
  }

  render() {
    // let depts = ['A', 'B', 'C', 'D', 'E', 'F'];
    let periods = ['1', '2', '3', '4', '5', '6', '7','8','9','0','1','2','3','4','5','6', '7','8','9','0','1','2','3','4','5'];
    // let types = ['100', '200', '300', 'D', 'Off-Campus', 'Comps'];

    return (
      <div class="browse">
        <HeaderBar />
        <div class="main">
          <SideBar />
          <Grid courses={periods}/>
        </div>
      </div>
    );
  }
}

export default Browse;
