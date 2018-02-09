import fetch from 'cross-fetch';

function requestCourses() {
  return {
    type: 'REQUEST_COURSES'
  }
}

function receiveCourses(json) {
  return {
    type: 'RECEIVE_COURSES',
    courses: json._items,
    receivedAt: Date.now()
  }
}

export function fetchCourses() {
  return dispatch => {
    dispatch(requestCourses());
    console.log(fetch);
    return fetch('http://crap-db.herokuapp.com/courses')
      .then(response => response.json())
      .then(json => dispatch(receiveCourses(json)), console.log("Something went wrong."));
  }
}

export function fetchCoursesBy(queryDict) {
  return dispatch => {
    dispatch(requestCourses());
    console.log(fetch)
    let key = Object.keys(queryDict)[0];
    return fetch('http://crap-db.herokuapp.com/courses?where={"'+key+'":"'+queryDict[key]+'"}')
      .then(response => response.json())
      .then(json => dispatch(receiveCourses(json)), console.log("Something went wrong."));
  }
}

export function saveCourse(id) {
  return {
    type: 'SAVE_COURSE',
    id
  }
}
