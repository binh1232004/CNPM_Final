import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator  } from "firebase/auth";
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
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');
const loginEmailPassword = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
    console.log(userCredential.user)
}