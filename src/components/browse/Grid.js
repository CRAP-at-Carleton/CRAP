import React from 'react'
import Tile from '../homepage/Tile'
import BigTile from './BigTile'
import './Grid.css'

class Grid extends React.Component {

  constructor(props){
  	super(props);
  	this.courseTiles = [];
  	this.state={selected: -1};

  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key){
    this.setState({selected: key});
  }

  render() {
  	this.courseTiles = [];
  	this.courseTiles.push((<BigTile key='0' contents={this.props.courses[0]} num='0' 
  		selected={this.state.selected} registerSelection={this.handleClick}/>
  	));
  	for (let i=1; i < this.props.courses.length; i++){
  		this.courseTiles.push((<Tile key={i} contents={this.props.courses[i]} num={i} 
  			selected={this.state.selected} registerSelection={this.handleClick}/>));
  	}
    return (
      <div className="grid">{this.courseTiles}</div>
    );
  }
}

export default Grid;
