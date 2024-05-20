import { correctValidateSignUp } from "./validateForm";
import { inputSignUpName, inputSignUpPhoneNumber, inputSignUpEmail, inputSignUpPassword, inputSignUpRePassword } from "./validateForm";
import firebase from "firebase/compat/app";
const auth = firebase.auth();
const database = firebase.database(); 
if(correctValidateSignUp){
    const email = inputSignUpEmail.value;
    const password = inputSignUpPassword.value;
    auth.createUserWithEmailAndPassword(email, password)
    .then()
}