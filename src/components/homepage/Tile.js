import React from 'react';
import classNames from 'classnames';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {isSelected: false}

  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
  	// this.setState(prevState => ({isSelected: !prevState.isSelected}));
  	this.props.registerSelection(this.props.num);
  }

  componentWillReceiveProps(nextProps){
    this.setState({isSelected: this.props.num === nextProps.selected});
  }

  render() {
   	let selected = (this.props.selected === this.props.num) ? "selected" : "";

   	if(this.props.isGrid){
	    return (
	      <div className={classNames("Tile", selected)} onClick={this.handleClick}>
	        {this.props.contents}
	      </div>
	    );
   	} else {
   	  return(
   	    <div className={classNames("Tile", selected)}>
   	      {this.props.contents}
        </div>
   	  )
   	}
  }
}

export default Tile;
