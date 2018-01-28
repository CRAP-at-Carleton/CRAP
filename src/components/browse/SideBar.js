import React from 'react'
import './SideBar.css'
import Filter from './Filter';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(type, value, selected) {
    this.props.handleFilterClick(type, value, selected);
  }

  render() {
  	return (
      <div className="sidebar">
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="filters">
          <div className="filterBlock">
            <Filter type='dept' value='CS' handleClick={this.handleFilterClick} />
            <Filter type='dept' value='BIOL' handleClick={this.handleFilterClick} />
            <Filter type='dept' value='ENGL' handleClick={this.handleFilterClick} />
            <Filter type='dept' value='MATH' handleClick={this.handleFilterClick} />
            <Filter type='dept' value='ECON' handleClick={this.handleFilterClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
