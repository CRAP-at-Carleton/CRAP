import React from 'react';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { fetchCourses, fetchCoursesBy } from '../../actions';
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
    const parsedQuery = QueryString.parse(this.props.location.search);
    if (Object.keys(parsedQuery).length != 0) {
      this.props.fetchCoursesBy(parsedQuery);
      console.log('Yo.');
      console.log(parsedQuery);
    } else {
      console.log('No Yo');
      this.props.fetchCourses();        
    }
  }

  render() {
    const parsedQuery = QueryString.parse(this.props.location.search);
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
    fetchCourses: () => dispatch(fetchCourses()),
    fetchCoursesBy: (query) => dispatch(fetchCoursesBy(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
