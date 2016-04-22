import { getDatabase, ref} from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig.js'
export class User{
    /* */
    auth(email, password){
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             const user = userCredential.user;
         })
        .catch((error) => {
            console.error(error.message)
        })
    }
}
