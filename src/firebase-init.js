// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2waj22vEMYH17aDKwC6lWakrSyRQWd9A",
  authDomain: "pathagar-3039f.firebaseapp.com",
  projectId: "pathagar-3039f",
  storageBucket: "pathagar-3039f.appspot.com",
  messagingSenderId: "130335724006",
  appId: "1:130335724006:web:71e760db0e095b9ed00627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;










// import firebase from  "firebase/app";
// import "firebase/auth"


// const firebaseConfig = {
//   apiKey: "AIzaSyD2waj22vEMYH17aDKwC6lWakrSyRQWd9A",
//   authDomain: "pathagar-3039f.firebaseapp.com",
//   projectId: "pathagar-3039f",
//   storageBucket: "pathagar-3039f.appspot.com",
//   messagingSenderId: "130335724006",
//   appId: "1:130335724006:web:71e760db0e095b9ed00627"
// };

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// export { auth, facebookAuthProvider,googleAuthProvider};

