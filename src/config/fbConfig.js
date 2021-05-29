import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFXa1h1BfJPPa9gDouWAd1sfA8I1b6xOY",
    authDomain: "mario-plan-dae6c.firebaseapp.com",
    projectId: "mario-plan-dae6c",
    storageBucket: "mario-plan-dae6c.appspot.com",
    messagingSenderId: "585004367332",
    appId: "1:585004367332:web:559edaec8ca8bde1d79bf1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  firestore.settings({ timestampsInSnapshots: true});

  export { firebase, firestore };