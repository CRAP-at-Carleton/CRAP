import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.type, this.props.value, !this.state.selected);
    this.setState(prevState => {
      return { selected: !prevState.selected }
    });
  }

  render() {
    return (
      <div className="filterLink" onClick={this.handleClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Filter;
