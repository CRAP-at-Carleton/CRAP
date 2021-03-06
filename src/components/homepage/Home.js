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
    // let periods = ['1', '2', '3', '4', '5', '6', '7','8','9','0','1','2','3','4','5'];
    // let types = ['100', '200', '300', 'D', 'Off-Campus', 'Comps'];

    // let courseNames = this.props.courses.map(course => course.dept + course.course_num);
    let courses = this.props.courses;
    let departments = [...new Set(courses.map(course => course.dept))];
    let times = courses.map(course => course.sched);
    let periods = [];
    for(let course_sched in times){
      // let obj = JSON.parse(times[course_sched]);
      let result = "";
      for(let day in times[course_sched]){
        if(times[course_sched][day]['start']){
          result += day + ": " + times[course_sched][day]['start'] + "-" + times[course_sched][day]['end'] + "|";
        }
      }
      if(result){
        periods.push(result);
      }
    }
    periods = periods.filter((x, i, a) => a.indexOf(x) == i);
    let types = ['100', '200', '300'];
    return (
      <div>
        <HeaderBar />
        <NavRow category="Department" parity="even" first={true} tiledata={departments} field='dept' /> 
        <NavRow category="Period" parity="odd" tiledata={periods} field='time' />
        <NavRow category="Type" parity="even" tiledata={types} field='course_num' />
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
