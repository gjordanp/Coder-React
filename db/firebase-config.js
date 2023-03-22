// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmTIxArpqyQpyWCNY3OXaAT4X6Ltaa9FY",
  authDomain: "gjp-coder-react.firebaseapp.com",
  projectId: "gjp-coder-react",
  storageBucket: "gjp-coder-react.appspot.com",
  messagingSenderId: "243761407602",
  appId: "1:243761407602:web:788cf3c741f583125d04eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export default db;