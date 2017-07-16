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