import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvzRhoHRmgWbDmJr6JyBRN6PFcShpTWfI",
    authDomain: "crwn-db-f8f34.firebaseapp.com",
    projectId: "crwn-db-f8f34",
    storageBucket: "crwn-db-f8f34.appspot.com",
    messagingSenderId: "252917332334",
    appId: "1:252917332334:web:070b2d9669ee374eec297f",
    measurementId: "G-RB9R1HN2S7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;