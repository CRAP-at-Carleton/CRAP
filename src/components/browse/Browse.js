import React from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';
import HeaderBar from '../homepage/HeaderBar'
import SideBar from './SideBar'
import Grid from './Grid'
import './Browse.css';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: {
        dept: [],
        type: [],
        period: []
      }
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(type, value, selected) {
    if (selected) {
      this.setState(prevState => {
        prevState.selectedFilters[type].push(value);
        return prevState;
      })
    } else {
      this.setState(prevState => {
        const index = prevState.selectedFilters[type].indexOf(value);
        prevState.selectedFilters[type].splice(index, 1);
        return prevState;
      })
    }
  }

  componentWillMount() {
    this.props.fetchCourses();
  }

  render() {
    let courseNames = this.props.courses.map(course => course.dept + course.course_num);
    let courseIds = this.props.courses.map(course => course._id);
    return (
      <div className="browse">
        <HeaderBar />
        <div className="main">
          <SideBar handleFilterClick={this.handleFilterClick} />
          <Grid courses={courseNames} courseIds={courseIds} />
        </div>
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
