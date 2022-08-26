import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBq8HAOupoSOyiSgM6t0l4Dm0NVrg7uvas",
    authDomain: "fir-9aab2.firebaseapp.com",
    projectId: "fir-9aab2",
    storageBucket: "fir-9aab2.appspot.com",
    messagingSenderId: "720905192157",
    appId: "1:720905192157:web:85378f3354f8852db89134"
  };

  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {auth}
