// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2TZxo_CNF1zSe2oe2FzLqcwChm2uscUg",
  authDomain: "calendar-b2475.firebaseapp.com",
  projectId: "calendar-b2475",
  storageBucket: "calendar-b2475.appspot.com",
  messagingSenderId: "908795028702",
  appId: "1:908795028702:web:80299500b16207c0e68e4f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;