import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER_AND_REPO,
  SET_LOADING,
} from '../type'


const GithubReducer = (state, action) => {

  switch (action.type) {
    case GET_USER_AND_REPO:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      }

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false

      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}

export default GithubReducer;
