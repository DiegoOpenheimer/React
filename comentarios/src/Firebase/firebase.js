import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD1_mqHzwNHl4tj266TujnVFcIzjtsg5Ew",
    authDomain: "reactjs-def25.firebaseapp.com",
    databaseURL: "https://reactjs-def25.firebaseio.com",
    projectId: "reactjs-def25",
    storageBucket: "reactjs-def25.appspot.com",
    messagingSenderId: "995869287028"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export default base