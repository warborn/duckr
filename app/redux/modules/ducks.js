import { saveDuck } from 'helpers/api'
import { closeModal } from './modal'
import { addSingleUsersDuck } from './usersDucks'

const FETCHING_DUCK = 'FETCHING_DUCK'
const FETCHING_DUCK_FAILURE = 'FETCHING_DUCK_FAILURE'
const FETCHING_DUCK_SUCCESS = 'FETCHING_DUCK_SUCCESS'
const ADD_DUCK = 'ADD_DUCK'
const ADD_MULTIPLE_DUCKS = 'ADD_MULTIPLE_DUCKS'
const REMOVE_FETCHING = 'REMOVE_FETCHING'

export function fetchingDuck() {
  return {
    type: FETCHING_DUCK
  }
}

export function fetchingDuckFailure(error) {
  console.warn(error)
  return {
    type: FETCHING_DUCK_FAILURE,
    error: 'Error fetching duck'
  }
}

export function fetchingDuckSuccess(duck) {
  return {
    type: FETCHING_DUCK_SUCCESS,
    duck,
  }
}

export function removeFetching() {
  return {
    type: REMOVE_FETCHING
  }
}

export function addDuck(duck) {
  return {
    type: ADD_DUCK,
    duck,
  }
}

export function addMultipleDucks(ducks) {
  return {
    type: ADD_MULTIPLE_DUCKS,
    ducks
  }
}

const initialState = {
  isFetching: true,
  error: ''
}

export function duckFanout (duck) {
  return function (dispatch, getState) {
    const uid = getState().users.authId
    saveDuck(duck)
      .then((duckWithId) => {
        dispatch(addDuck(duckWithId))
        dispatch(closeModal())
        dispatch(addSingleUsersDuck(uid, duckWithId.duckId))
      })
      .catch((error) => console.warn('Error in duckFanout: ', error))
  }
}

export default function ducks(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DUCK:
      return {
        ...state,
        isFetching: true
      }
    case ADD_DUCK:
    case FETCHING_DUCK_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck
      }
    case FETCHING_DUCK_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case REMOVE_FETCHING:
      return {
        ...state,
        error: '',
        isFetching: false
      }
    case ADD_MULTIPLE_DUCKS:
      return {
        ...state,
        ...action.ducks
      }
    default:
      return state
  }
}