import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAs6_koYLk2P4p4R0wA-L8gar3e5qSPS6s",
  authDomain: "wb-duckr.firebaseapp.com",
  databaseURL: "https://wb-duckr.firebaseio.com",
  projectId: "wb-duckr",
  storageBucket: "wb-duckr.appspot.com",
  messagingSenderId: "435915013449"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000