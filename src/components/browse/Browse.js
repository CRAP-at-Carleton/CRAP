import React from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';
import HeaderBar from '../homepage/HeaderBar'
import SideBar from './SideBar'
import Grid from './Grid'
// import './Browse.css';

class Browse extends React.Component {
  constructor(props){
    super(props);
    this.state = {courses: []};
  }

  componentWillMount() {
    this.props.fetchCourses();
  }

  render() {
    // let depts = ['A', 'B', 'C', 'D', 'E', 'F'];
    let periods = ['1', '2', '3', '4', '5', '6', '7','8','9','0','1','2','3','4','5','6', '7','8','9','0','1','2','3','4','5'];
    // let types = ['100', '200', '300', 'D', 'Off-Campus', 'Comps'];

    let courseNames = this.props.courses.map(course => course.dept + course.course_num);
    return (
      <div>
        <HeaderBar />
        <SideBar />
        <Grid courses={courseNames}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Browse);