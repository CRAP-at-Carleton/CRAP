import React from 'react'
import Tile from '../homepage/Tile'
import './Grid.css'

class Grid extends React.Component {
  render() {
  	let courseTiles = []
  	for (let i=0; i < this.props.courses.length; i++){
  		courseTiles.push(<div class="tilecontainer"><Tile number={i} contents={this.props.courses[i]}/></div>)
  	}
    return (
      <div class="grid">{courseTiles}</div>
    );
  }
}

export default Grid;
