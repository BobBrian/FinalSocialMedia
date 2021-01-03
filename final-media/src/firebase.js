import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHHcZF1BQ6yMyyr3vEicmEY4lllBzoBjU",
    authDomain: "finalsocial-6d883.firebaseapp.com",
    projectId: "finalsocial-6d883",
    storageBucket: "finalsocial-6d883.appspot.com",
    messagingSenderId: "1010037487811",
    appId: "1:1010037487811:web:79eb11d66c70ef287cca76"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // Initialziation of Firestore : the Real Time Database for Firebase which will store information on Posts
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
 

  export {db, auth};

