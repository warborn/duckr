const FETCHING_LIKES = 'FETCHING_LIKES'
const FETCHING_LIKES_FAILURE = 'FETCHING_LIKES_FAILURE'
const FETCHING_LIKES_SUCCESS = 'FETCHING_LIKES_SUCCESS'
export const ADD_LIKE = 'ADD_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

export function fetchingLikes () {
  return {
    type: FETCHING_LIKES
  }
}

export function fetchingLikesFailure (error) {
  console.warn(error)
  return {
    type: FETCHING_LIKES_FAILURE,
    error: 'Error fetching likes'
  }
}

export function fetchingLikesSuccess (likes) {
  return {
    type: FETCHING_LIKES_SUCCESS,
    likes
  }
}

export function addLike (duckId) {
  return {
    type: ADD_LIKE,
    duckId
  }
}

export function removeLike (duckId) {
  return {
    type: REMOVE_LIKE,
    duckId
  }
}

const initialState = {
  isFetching: false,
  error: ''
}

export default function usersLikes(state = initialState, action) {
  switch(action.type) {
    case FETCHING_LIKES:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_LIKES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_LIKES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        ...action.likes
      }
    case ADD_LIKE:
      return {
        ...state,
        [action.duckId]: true
      }
    case REMOVE_LIKE:
      return Object.keys(state)
        .filter((duckId) => action.duckId !== duckId)
        .reduce((prev, current) => {
          prev[current] = state[current]
        }, {})
    default:
      return state
  }
}