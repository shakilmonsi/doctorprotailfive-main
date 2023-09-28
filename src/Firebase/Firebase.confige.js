// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJKHF1lwJ7CmKeNUauTeWYCbFsblI3QGo",
  authDomain: "doctorprotailfive-main.firebaseapp.com",
  projectId: "doctorprotailfive-main",
  storageBucket: "doctorprotailfive-main.appspot.com",
  messagingSenderId: "121615280111",
  appId: "1:121615280111:web:7ca1a86b8bf9dbd0e3b81a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app