// Reference of the reducers used in the app

// Users

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: ''
  }
}

function user(state = initialUserState, action) {
  switch(action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}

function users(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: ''
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ..state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action)
        }
    default: 
      return state
  }
}

// Ducks
const initialState = {
  isFetching: true,
  error: ''
}

function ducks(state = initialState, action) {
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

// Feed

const initialState = {
  newDucksAvailable: false,
  newDucksToAdd: [],
  isFetching: false,
  error: '',
  duckIds: []
}

function feed(state = initialState, action) {
  switch(action.type) {
    case SETTING_FEED_LISTENER:
      return {
        ...state,
        isFetching: true
      }
    case SETTING_FEED_LISTENER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case SETTING_FEED_LISTENER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        duckIds: action.duckIds,
        newDucksAvailable: false
      }
    case ADD_NEW_DUCK_ID_TO_FEED:
      return {
        ...state,
        newDucksToAdd: [action.duckId, ...state.newDucksToAdd],
        newDucksAvailable: true
      }
    case RESET_NEW_DUCKS_AVAILABLE:
      return {
        ...state,
        duckIds: [...state.newDucksToAdd, ...state.ducksIds],
        newDucksToAdd: [],
        newDucksAvailable: false
      }
    default: 
      return state
  }
}

// Listeners
function listeners(state = {}, action) {
  switch(action.type) {
    case ADD_LISTENER:
      return {
        ...state,
        [action.listenerId]: true
      }
    default:
      return state
  }
}

// Modal
const initialState = {
  isOpen: false,
  duckText: ''
}

function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        duckText: '',
        isOpen: false
      }
    case UPDATE_DUCK_TEXT:
      return {
        ...state,
        duckText: action.newDuckText
      }
    default:
      return state
  }
}

// Replies
const initialStateReply = {
  name '',
  reply: '',
  uid: '',
  timestamp: 0,
  avatar: '',
  replyId: ''
}

function duckReplies(state = initialStateReply, action) {
  switch(action.type) {
    case ADD_REPLY:
      return {
        ...state,
        [action.reply.replyId]: action.reply
      }
    case REMOVE_REPLY:
      return {
        ...state,
        [action.reply.replyId]: undefined
      }
    default:
      return state
  }
}

const initialDuckState = {
  lastUpdated: Date.now(),
  replies: {}
}

function repliesAndLastUpdated(state = initialDuckState, action) {
  switch(action.type) {
    case FETCHING_REPLY_SUCCESS:
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies
      }
    case ADD_REPLY:
    case REMOVE_REPLY:
      return {
        ...state,
        replies: duckReplies(state.replies, action)
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: true,
  error: ''
}

function replies(state = initialState, action) {
  switch(action.type) {
    case FETCHING_REPLIES:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_REPLIES_FAILURE:
    case ADD_REPLY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ADD_REPLY:
    case FETCHING_REPLIES_SUCCESS:
    case REMOVE_REPLY:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.duckId]: repliesAndLastUpdated(state[action.duckId], action)
      }
    default:
      return state
  }
}

// like count
function count(state = 0, action) {
  switch(action.type) {
    case ADD_LIKE:
      return state + 1
    case REMOVE_LIKE:
      return state - 1
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: ''
}

function likeCount(state = initialState, action) {
  switch(action.type) {
    case FETCHING_COUNT:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_COUNT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_COUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        [action.duckId]: action.count
      }
    case ADD_LIKE:
    case REMOVE_LIKE:
      return typeof state[action.duckId] === 'undefined'
        ? state 
        : {
          ...state,
          [action.duckId]: count(state[action.duckId], action)
        }
    default:
      return state
  }
}

// users ducks
const initialUsersDuckState = {
  lastUpdated: 0,
  duckIds: []
}

function usersDuck(state = initialUsersDuckState, action) {
  switch(action.type) {
    case ADD_SINGLE_USERS_DUCK:
      return {
        ...state,
        duckIds: state.duckIds.concat([action.duckId])
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: true,
  error: ''
}

function usersDucks(state = initialState, action) {
  switch(action.type) {
    case FETCHING_USERS_DUCKS:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USERS_DUCKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USERS_DUCKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: {
          lastUpdated: action.lastUpdated,
          duckIds: action.duckIds
        }
      }
    case ADD_SINGLE_USERS_DUCK:
      return typeof state[action.uid] === 'undefined':
        ? state
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: usersDuck(state[action.uid], action)
        }
    default:
      return state
  }
}

// users likes
const initialState = {
  isFetching: false,
  error: ''
}

function usersLikes(state = initialState, action) {
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
    case FETCHING_FAILURE_SUCCESS:
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
          prev[current] => state[current]
        }, {})
    default:
      return state
  }
}