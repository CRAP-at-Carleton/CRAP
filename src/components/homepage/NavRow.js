import React from 'react'
import classNames from 'classnames'
import TileRowContainer from './TileRowContainer'
import './NavRow.css'

class NavRow extends React.Component {
  render() {
  	//get courses and build a tilecontainer
    return (
      <div className={classNames("navrow",this.props.parity,{"first":this.props.first})}> 
    	This is the {this.props.category} nav row.
  	  <TileRowContainer tiledata={this.props.tiledata}/>
      </div>
    );
  }
}

export default NavRow;
