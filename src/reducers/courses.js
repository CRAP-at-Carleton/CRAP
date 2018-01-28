function courses(state = { courses: [] }, action) {
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
    default:
      return state
  }
}

export default courses;
