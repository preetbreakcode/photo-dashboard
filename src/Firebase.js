// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB09DaLh6rnqZsJJmr-fvPICGD0nAXlc4E",
    authDomain: "photo-hub-38c8a.firebaseapp.com",
    projectId: "photo-hub-38c8a",
    storageBucket: "photo-hub-38c8a.appspot.com",
    messagingSenderId: "1086607136218",
    appId: "1:1086607136218:web:0638c4bf15af226135dce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const gmailProvider = new GoogleAuthProvider()
export const loginWithGmail = () => signInWithPopup(auth, gmailProvider)

// export const loginWithGmail = () => {
//     signInWithPopup(auth, gmailProvider).then((result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;

//         localStorage.setItem("auth", true);
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);

//     })
//         .catch((error) => {
//             console.log(error);
//         });
// }

