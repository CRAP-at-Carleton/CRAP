function courses(state = { courses: [], savedCourses: [] }, action) {
  switch (action.type) {
    case 'REQUEST_COURSES':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_COURSES':
      return Object.assign({}, state, {
        isFetching: false,
        courses: action.courses,
        lastUpdated: action.receivedAt
      })
    case 'SAVE_COURSE':
      return Object.assign({}, state, {
        savedCourses: [
          ...state.savedCourses,
          action.id
        ]
      })
    default:
      return state
  }
}

export default courses;
