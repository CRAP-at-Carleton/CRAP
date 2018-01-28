import React from 'react';
import Tile from './Tile'
import './TileRowContainer.css';

class TileRowContainer extends React.Component {
  render() {
  	let tiles = []
    console.log("trc data: " + this.props.tiledata);
  	for (let i = 0; i < this.props.tiledata.length; i++){
  	  tiles.push(
        <li><Tile key={i} num={i} contents={this.props.tiledata[i]} isGrid={false} /></li>
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
