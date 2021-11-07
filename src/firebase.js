import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAuoZskn2_958xjJ0uqUWL2lF1K-j5GA-c",
  authDomain: "playstate-a31c0.firebaseapp.com",
  projectId: "playstate-a31c0",
  storageBucket: "playstate-a31c0.appspot.com",
  messagingSenderId: "1009661878289",
  appId: "1:1009661878289:web:d054d2882bab679e2e51b0"
}
firebase.initializeApp(firebaseConfig)

//utilities
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

//collection references
const usersCollection = db.collecton('users')
const gamesCollection = db.collection('games')

export{
    db,
    auth,
    storage,
    usersCollection,
    gamesCollection
}