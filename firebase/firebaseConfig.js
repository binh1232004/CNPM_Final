// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus",
  authDomain: "demosoftwaretechnology.firebaseapp.com",
  databaseURL: "https://demosoftwaretechnology-default-rtdb.firebaseio.com",
  projectId: "demosoftwaretechnology",
  storageBucket: "demosoftwaretechnology.appspot.com",
  messagingSenderId: "375046175781",
  appId: "1:375046175781:web:0d1bfac1b8ca71234293cc",
  measurementId: "G-120GXQ1F6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


