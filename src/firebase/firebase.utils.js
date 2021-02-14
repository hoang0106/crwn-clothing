import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4ry37rUWEYNSdapzeLBwpMvCHXNClI1c",
    authDomain: "crwn-db-f0fe4.firebaseapp.com",
    projectId: "crwn-db-f0fe4",
    storageBucket: "crwn-db-f0fe4.appspot.com",
    messagingSenderId: "1056401131267",
    appId: "1:1056401131267:web:4bd5c0950e7775c5790b36"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInwWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;