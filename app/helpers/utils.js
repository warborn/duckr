import { usersDucksExpirationLength, userExpirationLength } 
  from 'config/constants'

export function formatUserInfo (name, avatar, uid) {
  return {
    name, 
    avatar,
    uid
  }
}

export function formatDuck (text, { avatar, name, uid}) {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now()
  }
}

export function formatTimestamp (timestamp) {
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getYear()}`
}

function getMilliseconds (timestamp) {
  return new Date().getTime() - new Date(timestamp).getTime()
}

export function staleUser (timestamp) {
  return getMilliseconds(timestamp) > userExpirationLength
}

export function staleDucks (timestamp) {
  return getMilliseconds(timestamp) > usersDucksExpirationLength
}

export function formatReply ({ name, uid, avatar}, replyText) {
  return {
    name,
    replyText,
    uid,
    avatar,
    timestamp: Date.now(),
  }
}