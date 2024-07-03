// import { initializeApp } from 'firebase/app';
import  { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    btnSubmit,
    inputPassword,
    inputUsername,
    showLoginInvalidUser,
    isCorrectValidateSignUp,
    inputSignUpEmail,
    inputSignupPassword,
    btnSubmitSignUp,
    errorSignUpEmail,
    inputSignUpName,
    inputSignUpPhoneNumber,
    inputForgotpass,
    validateEmail,
    forgotpassbtnSubmit
} from '../public/js/validateForm.js';
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     connectAuthEmulator,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     sendEmailVerification,
//     GoogleAuthProvider,
//     signInWithPopup,
//     FacebookAuthProvider,
//     sendPasswordResetEmail,
//     signOut,
// } from 'firebase/auth';

import {
    getAuth,
    createUserWithEmailAndPassword,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    sendPasswordResetEmail,
    signOut,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { signInDialog } from '../public/js/popUpAction.js';
// import { get,getDatabase, set, ref } from 'firebase/database';
import { getDatabase, ref, get, set  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { logout } from "./logout.js";
const firebaseConfig = {
    apiKey: 'AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus',
    authDomain: 'demosoftwaretechnology.firebaseapp.com',
    databaseURL: 'https://demosoftwaretechnology-default-rtdb.firebaseio.com',
    projectId: 'demosoftwaretechnology',
    storageBucket: 'demosoftwaretechnology.appspot.com',
    messagingSenderId: '375046175781',
    appId: '1:375046175781:web:0d1bfac1b8ca71234293cc',
    measurementId: 'G-120GXQ1F6L',
};
const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return day + '/' + month + '/' + year;
};
let strLoginUID;
var isLoggin = false;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Testing local
//connectAuthEmulator(auth, 'https://localhost:9099');
const writeUserData = (
    userID,
    address,
    birth,
    email,
    fullName,
    phone,
    role,
    updateDate,
) => {
    const db = getDatabase();
    //console.log(db);
    const reference = ref(db, 'User/' + userID);
    //console.log(reference);
    set(reference, {
        Address: address,
        Birth: birth,
        CreateDate: getCurrentDate(),
        Email: email,
        FullName: fullName,
        Phone: phone,
        role: false,
        UpdateDate: updateDate,
    });
};
//**************************Login**************************
const loginEmailPassword = async () => {
    const strValueEmail = inputUsername.value;
    const strValPassword = inputPassword.value;
    try {
        const userCredentials = await signInWithEmailAndPassword(
            auth,
            strValueEmail,
            strValPassword,
        );
        //console.log(userCredentials.user);
        isLoggin = true;
    } catch (error) {
        showLoginInvalidUser();
        console.log(error);
    }
};
btnSubmit.addEventListener('click', loginEmailPassword);
//**************************Sign up**************************
const createUser = async () => {
    const strValueEmail = inputSignUpEmail.value;
    const strValPassword = inputSignupPassword.value;
    const strValPhone = inputSignUpPhoneNumber.value;
    const strValName = inputSignUpName.value;
    try {
        if (isCorrectValidateSignUp()) {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                strValueEmail,
                strValPassword,
            );

            //Write user data into database
            //console.log(userCredentials.user.uid);
            const arrArgs = [
                userCredentials.user.uid,
                '',
                '',
                strValueEmail,
                strValName,
                strValPhone,
                false,
                getCurrentDate(),
            ];
            writeUserData(...arrArgs);
            //send email verificatoin
            const sendEmail = await sendEmailVerification(userCredentials.user);
            let msg = 'An email verification link has been sent';
            const verifyUser = document.getElementsByClassName(
                'error__invalid-user',
            )[1];
            verifyUser.innerHTML = msg;
            verifyUser.style.display = 'block';
            verifyUser.style.color = 'green';
            verifyUser.style.margin = '5px 14px';
        }
    } catch (error) {
        errorSignUpEmail.style.display = 'block';
        inputSignUpEmail.style.outline = '1px solid red';
        console.log(error);
    }
};

btnSubmitSignUp.addEventListener('click', createUser);
const getRoleUser = async (userID) => {
    const db = getDatabase();
    const reference = ref(db, 'User/' + userID);
    const snapshot = await get(reference);
    if (snapshot.exists()) {
        return snapshot.val().Role;
    }
};
//
//create a button sign out in hiddenlogin
// document.getElementById("p2").style.color = "blue";
// const monitorAuthState = async () => {
//     onAuthStateChanged(auth, user => {
//         // if user login
//         if (user) {
//             signInDialog.close();
//             strLoginUID = user.uid;
//             getRoleUser(strLoginUID).then((role) => {
//                 if (role === true) {
//                     window.location.href = '../view/admin/category.html';
//                     console.log('admin');
//                 } else {
//                     //redirect to main page
//                     // window.location.href = '../user/main.html';
//                 }
//             });
//             isLoggin = true;
//             console.log(strLoginUID)
//         } else {
//             //for log out action
//             //switch to main page
//             //console.log(user);
//             isLoggin = false;
//             console.log('log out');
//         }
//     });
// };
const loginElement = document.getElementById('index__log-in');
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            signInDialog.close();
            strLoginUID = user.uid;
            getRoleUser(strLoginUID).then((role) => {
                if (role === true) {
                    window.location.href = '/CNPM_Final/view/admin/category.html';
                    console.log('admin');
                } else {
                    // Chuyển hướng đến trang chính
                    // window.location.href = '../user/main.html';
                }
            });
            isLoggin = true;
            console.log(strLoginUID);
            localStorage.setItem('userID', strLoginUID);
            if (loginElement) {
                loginElement.innerHTML = 'Đăng xuất'; 
                loginElement.addEventListener('click', () => {
                    logout('./');
                });
            }
        } else {
            isLoggin = false;
            console.log('log out');
            localStorage.setItem('userID', null);
            if (loginElement) {
                loginElement.innerHTML = 'Đăng nhập'; 
            }
        }
    });
};


monitorAuthState();
//**********************Google auth**********************
//Sign up
const btnSignupGoogle = document.getElementsByClassName(
    'Google-auth__sign-up',
)[0];
const providerGoogle = new GoogleAuthProvider();
const googleAuth = () => {
    signInWithPopup(auth, providerGoogle)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            //write in database
            const arrArgs = [
                user.uid,
                '',
                '',
                user.email,
                user.displayName,
                '',
                false,
                getCurrentDate(),
            ];
            isLoggin = true;
            writeUserData(...arrArgs);
            //redirect into login.html
            window.location.href = '.';
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};
btnSignupGoogle.addEventListener('click', googleAuth);
//Sign in
const btnSigninGoogle = document.getElementsByClassName(
    'Google-auth__sign-in',
)[0];
btnSigninGoogle.addEventListener('click', googleAuth);
//**********************Facebook auth**********************
const btnSignupFacebook = document.getElementsByClassName(
    'Facebook-auth__sign-up',
)[0];
const providerFacebook = new FacebookAuthProvider();
const facebookAuth = () => {
    signInWithPopup(auth, providerFacebook)
        .then((result) => {
            // The signed-in user info.
            console.log(1);
            const user = result.user;

            console.log(user);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential =
                FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            //write user data in database
            const arrArgs = [
                user.uid,
                '',
                '',
                user.email,
                user.displayName,
                '',
                false,
                getCurrentDate(),
            ];
            isLoggin = true;
            writeUserData(...arrArgs);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
};
btnSignupFacebook.addEventListener('click', facebookAuth);

//**********************Forget password**********************
const sendEmailResetPass = () => {
    const strValForgetPassEmail = inputForgotpass.value;
    if (validateEmail(strValForgetPassEmail)) {
        sendPasswordResetEmail(auth, strValForgetPassEmail)
            .then(() => {
                alert('A password Reset link has been sent to your email');
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
};
forgotpassbtnSubmit.addEventListener('click', sendEmailResetPass);
//logout

export {strLoginUID};
