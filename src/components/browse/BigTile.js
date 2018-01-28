import React from 'react';
import classNames from 'classnames';
import './BigTile.css';

class BigTile extends React.Component {
  render() {
    return <div className={classNames("bigTile", "Tile")}>This big tile is about {this.props.contents}.</div>;
  }
}

export default BigTile;
