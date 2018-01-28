import React from 'react';
import classNames from 'classnames';
import './Tile.css';

class Tile extends React.Component {
  render() {

  	let parity = ""
    if (this.props.number % 2 === 0){
      parity = "even"
    } else {
      parity = "odd"
    }
    return <div className={classNames("Tile",parity)}>This tile is about {this.props.contents}.</div>;

  }
}

export default Tile;
