function courses(state = [], action) {
  switch (action.type) {
    case 'GET_COURSE':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default courses;
