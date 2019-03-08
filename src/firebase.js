import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBRT4OxromsdcaMGNguP8-9Z1oZY7wl15k",
    authDomain: "bdd-veille-techno-eni.firebaseapp.com",
    databaseURL: "https://bdd-veille-techno-eni.firebaseio.com",
    projectId: "bdd-veille-techno-eni",
    storageBucket: "bdd-veille-techno-eni.appspot.com",
    messagingSenderId: "364724575756"
};
firebase.initializeApp(config);

export default firebase;