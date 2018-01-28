import React from 'react';
import Tile from './Tile'
import './TileContainer.css';

class TileContainer extends React.Component {
  render() {
  	let tiles = []
  	for (let i = 0; i < this.props.tiledata.length; i++){
  	  tiles.push(
        <Tile key={i} number={i} contents={this.props.tiledata[i]} />
      );
  	}

    return (
      <div className="TileContainer">
        {tiles}
      </div>
    );
  }
}

export default TileContainer;
