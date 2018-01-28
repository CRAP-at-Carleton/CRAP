import React from 'react';
import Tile from './Tile'
import './TileRowContainer.css';

class TileRowContainer extends React.Component {
  render() {
  	let tiles = []
  	for (let i = 0; i < this.props.tiledata.length; i++){
  	  tiles.push(
        <li><Tile key={i} number={i} contents={this.props.tiledata[i]} /></li>
      );
  	}

    return (
      <ul className="TileRowContainer">
        {tiles}
      </ul>
    );
  }
}

export default TileRowContainer;
