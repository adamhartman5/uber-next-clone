// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwAjnQ8SlCRc0m_H7RyrL82Pux9l_gKMY",
  authDomain: "uber-next-clone-b9e5f.firebaseapp.com",
  projectId: "uber-next-clone-b9e5f",
  storageBucket: "uber-next-clone-b9e5f.appspot.com",
  messagingSenderId: "1021615638350",
  appId: "1:1021615638350:web:b0e24b905a36f396f0801f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth}