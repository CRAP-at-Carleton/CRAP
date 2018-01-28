import React from 'react';
import classNames from 'classnames';
import './BigTile.css';

class BigTile extends React.Component {
  render() {
    console.log(this.props.expanded);
    return (

    	<div className={classNames("bigTile", "Tile",{"expanded":this.props.expanded})}>
    	  This big tile is about {this.props.contents}.
    	</div>
    )
  }
}

export default BigTile;
