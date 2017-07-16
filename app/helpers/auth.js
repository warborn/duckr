import { ref, firebaseAuth } from 'config/constants'

export function auth (authType) {
  switch(authType) {
    case 'FACEBOOK_AUTH': 
      return firebaseAuth().signInWithPopup(new firebaseAuth.FacebookAuthProvider())
    case 'GOOGLE_AUTH':
    default:
      return firebaseAuth().signInWithPopup(new firebaseAuth.GoogleAuthProvider())
  }
  
}

export function checkIfAuthed (store) {
  return store.getState().users.isAuthed
}

export function logout () {
  return firebaseAuth().signOut()
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}