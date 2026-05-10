
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQTQIrUaPwZVNqfuudGXnlTkmgS1U530",
  authDomain: "ai-project-d2448.firebaseapp.com",
  projectId: "ai-project-d2448",
  storageBucket: "ai-project-d2448.firebasestorage.app",
  messagingSenderId: "110875522969",
  appId: "1:110875522969:web:dfe36abead589f3a300508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}