import React from 'react';
import { connect } from 'react-redux';
import { saveCourse } from '../../actions';
import classNames from 'classnames';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {isSelected: false}

  	this.handleClick = this.handleClick.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  handleClick(e){
  	// this.setState(prevState => ({isSelected: !prevState.isSelected}));
  	this.props.registerSelection(this.props.num);
  }

  saveCourse() {
    this.props.saveCourse(this.props.courseId);
  }

  componentWillReceiveProps(nextProps){
    this.setState({isSelected: this.props.num === nextProps.selected});
  }

  render() {
   	let selected = (this.props.selected === this.props.num) ? "selected" : "";

   	if(this.props.isGrid){
	    return (
	      <div className={classNames("Tile", selected)} onClick={this.handleClick}>
          <div className="save-button">
            <button onClick={this.saveCourse}>Save</button>
          </div>
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

function mapDispatchToProps(dispatch) {
  return {
    saveCourse: (id) => dispatch(saveCourse(id))
  };
}

export default connect(null, mapDispatchToProps)(Tile);
