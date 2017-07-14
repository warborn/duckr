// Reference for the redux actions
// Not valid JS and not used in the project

// Users

{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER
}

{
  type: FETCHING_USER
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user'
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp
}

//  Ducks

{
  type: FETCHING_DUCK
}

{
  type: FETCHING_DUCK_FAILURE,
  error: 'Error fetching duck'
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck
}

{
  type: REMOVE_FETCHING
}

{
  type: ADD_DUCK,
  duck,
}

{
  type: ADD_MULTIPLE_DUCKS,
  ducks
}

// Feed

{
  type: SETTING_FEED_LISTENER
}

{
  type: SETTING_FEED_LISTENER_FAILURE,
  error: 'Error fetching feeds'
}

{
  type: SEETTING_FEED_LISTER_SUCCESS,
  duckIds
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId
}

{
  type: RESET_NEW_DUCKS_AVAILABLE
}

// Listeners

{
  type: ADD_LISTENER,
  listenerId
}

// Modal

{
  type: OPEN_MODAL
}

{
  type: CLOSE_MODAL
}

{
  type: UPDATE_DUCK_TEXT,
  newDuckText
}

// Replies

{
  type: FETCHING_REPLIES
}

{
  type: FETCHING_REPLIES_FAILURE,
  error: 'Error fetching replies'
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now()
}

{
  type: ADD_REPLY,
  duckId,
  reply
}

{
  type: ADD_REPLY_FAILURE,
  error: 'Error adding reply'
}

{
  type: REMOVE_REPLY,
  replyId
}

// Like Count

{
  type: FETCHING_COUNT
}

{
  type: FETCHING_COUNT_FAILURE,
  error: 'Error fetching duck\'s count'
}

{
  type: FETCHING_COUNT_SUCCESS,
  duckId,
  count
}

// Users Ducks

{
  type: FETCHING_USERS_DUCKS,
  uid
}

{
  type: FETCHING_USERS_DUCKS_FAILURE,
  error: 'Error fetching users ducks ids'
}

{
  type: FETCHING_USERS_DUCKS_SUCCESS,
  uid,
  ducksIds,
  lastUpdated
}

{
  type: ADD_SINGLE_USERS_DUCK,
  uid,
  duckIds
}

// Users Likes

{
  type: FETCHING_LIKES
}

{
  type: FETCHING_LIKES_FAILURE,
  error: 'Error fetching likes'
}

{
  type: FETCHING_LIKES_SUCCESS,
  likes
}

{
  type: ADD_LIKE,
  duckId
}

{
  type: REMOVE_DUCK,
  duckId
}