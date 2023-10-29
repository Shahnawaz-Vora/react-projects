// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAri2pXU3f-D_iTFqCA5HiA89L7B-MXdSw",
  authDomain: "netflix-project-6c5f9.firebaseapp.com",
  projectId: "netflix-project-6c5f9",
  storageBucket: "netflix-project-6c5f9.appspot.com",
  messagingSenderId: "797711434249",
  appId: "1:797711434249:web:0c3fe601e554808afaeed8",
  measurementId: "G-LG5ZTEB0XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);