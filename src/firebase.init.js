// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWlfdEraT9AUtIfXsFleuMD-RWiG9DMw8",
    authDomain: "to-do-app-21424.firebaseapp.com",
    projectId: "to-do-app-21424",
    storageBucket: "to-do-app-21424.appspot.com",
    messagingSenderId: "110147931479",
    appId: "1:110147931479:web:2dabfe3d3d56cfcb788212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;