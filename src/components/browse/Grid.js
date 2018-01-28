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
  	let insertLocation = (Math.floor(this.state.selected/3)+1)*3;
    console.log("selected, insert " + this.state.selected + " " + insertLocation);
  	let infoTile = (<BigTile contents={this.props.courses[0]}
  		selected={this.state.selected} registerSelection={this.handleClick}/>);
  	for (let i=0; i < insertLocation; i++){
  		this.courseTiles.push((<Tile key={i} contents={this.props.courses[i]} num={i}
        selected={this.state.selected} registerSelection={this.handleClick} isGrid={true}/>));
  	}
    if(this.state.selected !== -1){
      this.courseTiles.push(infoTile);      
    }
  	for (let i=insertLocation; i < this.props.courses.length; i++){
  		this.courseTiles.push((<Tile key={i} contents={this.props.courses[i]} num={i} 
  			selected={this.state.selected} registerSelection={this.handleClick} isGrid={true}/>));
  	}
    return (
      <div className="grid">{this.courseTiles}</div>
    );
  }
}

export default Grid;
