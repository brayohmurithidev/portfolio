// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ErgjsI2BDxYCXXg2Um-MQV2m01t36WU",
  authDomain: "portfolio-fazilabs.firebaseapp.com",
  projectId: "portfolio-fazilabs",
  storageBucket: "portfolio-fazilabs.appspot.com",
  messagingSenderId: "950729948992",
  appId: "1:950729948992:web:f066badb362ecb46c344a5",
  measurementId: "G-HL8VEMHB6V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
