// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyiNWz56Fk9Gsg3uZMrfOc78JfrBe6CM",
  authDomain: "lost-found-9fc15.firebaseapp.com",
  projectId: "lost-found-9fc15",
  storageBucket: "lost-found-9fc15.firebasestorage.app",
  messagingSenderId: "94612018209",
  appId: "1:94612018209:web:1b0dd066333bb97d673f60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
