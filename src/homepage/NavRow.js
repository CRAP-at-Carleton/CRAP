import React from 'react'
import classNames from 'classnames'
import TileContainer from './TileContainer'
import './NavRow.css'

class NavRow extends React.Component {
  render() {
  	//get courses and build a tilecontainer
    return (
      <div className={classNames("navrow",this.props.parity)}> 
    	This is the {this.props.category} nav row.
    	<div>
    	  <TileContainer tiledata={this.props.tiledata}/>
    	</div> 
      </div>
    );
  }
}

export default NavRow;
