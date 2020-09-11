import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyD_qSS77Xh1loo0a6Jq1-R5VSnBGeepe7A',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://eclone-87d2b.firebaseio.com',
    projectId: 'eclone-87d2b',
    storageBucket: 'eclone-87d2b.appspot.com',
    messagingSenderId: '223450681347',
    appId: process.env.FIREBASE_APP_ID,
    measurementId: 'G-1CB2CDMB94',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

//firebase login
//firebase init
//hosting services
//npm run build
//firebase deploy

//for backend
//firebase init
//cloud function
