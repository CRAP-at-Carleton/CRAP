import React from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';
import HeaderBar from './HeaderBar'
import NavRow from './NavRow'
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentWillMount() {
    this.props.fetchCourses();
  }

  render() {
    // let depts = ['A', 'B', 'C', 'D', 'E', 'F'];
    let periods = ['1', '2', '3', '4', '5', '6', '7','8','9','0','1','2','3','4','5'];
    // let types = ['100', '200', '300', 'D', 'Off-Campus', 'Comps'];

    return (
      <div>
        <HeaderBar />
        <NavRow category="Department" parity="even" tiledata={periods} />
        <NavRow category="Period" parity="odd" tiledata={periods} />
        <NavRow category="Type" parity="even" tiledata={this.props.courses} />
        <button> Browse All </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCourses: () => dispatch(fetchCourses())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
