import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCdI5ZN0Rx1xMbXlRT69BowJhZbwW8Gxbg",
    authDomain: "time-tracking-5bfc0.firebaseapp.com",
    databaseURL: "https://time-tracking-5bfc0.firebaseio.com/",
    projectId: "time-tracking-5bfc0",
    storageBucket: "time-tracking-5bfc0.appspot.com",
    messagingSenderId: "753071225360"
}

firebase.initializeApp(config)

const database = firebase.database()

export default database
