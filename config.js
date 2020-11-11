import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyAh8_hslzueFx5-aY3AJagh9xPbmBNcsmM",
    authDomain: "helpinghub.firebaseapp.com",
    databaseURL: "https://helpinghub.firebaseio.com",
    projectId: "helpinghub",
    storageBucket: "helpinghub.appspot.com",
    messagingSenderId: "624959456819",
    appId: "1:624959456819:web:d277510837c139b0a4c546"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()