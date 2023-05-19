// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFLcNyBWo1NpzYnA107WADgHKztWa90vQ",
  authDomain: "ecommerce-cebados.firebaseapp.com",
  projectId: "ecommerce-cebados",
  storageBucket: "ecommerce-cebados.appspot.com",
  messagingSenderId: "860156213919",
  appId: "1:860156213919:web:b90a47b1d06939c94540aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app