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

    //where to insert the big tile
  	let insertLocation = (Math.floor(this.state.selected/3)+1)*3;
  	// let infoTile = (<BigTile contents={this.props.courses[this.state.selected]}/>);

    //insert everything before the big tile
    for (let row=0; row < this.props.courses.length / 3; row++){
      for (let column=0; column < 3; column++){
        let index = (3 * row) + column;
        this.courseTiles.push((<Tile key={index} contents={this.props.courses[index]} num={index}
          selected={this.state.selected} registerSelection={this.handleClick} isGrid={true}/>));
      }
      if(3 * row <= this.state.selected && 3 * (row + 1) > this.state.selected){
        this.courseTiles.push((<BigTile contents={this.props.courses[this.state.selected]}
          expanded={true}/>));
      } else{
        this.courseTiles.push(<BigTile contents='' expanded={false}/>);
      }
    }
    return (
      <div className="grid">{this.courseTiles}</div>
    );
  }
}

export default Grid;
