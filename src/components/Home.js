import React from 'react';
import { connect } from 'react-redux';
import { getCourse } from '../actions';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        Home page
        <div>
          <button onClick={this.props.onClick}>Get Courses</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    course: state.course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(getCourse())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
