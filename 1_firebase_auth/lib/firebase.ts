// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFn0CbHZEI63U1nQj-YQI_Z6KjpCVGh7I",
  authDomain: "no-input-signal-322709.firebaseapp.com",
  projectId: "no-input-signal-322709",
  storageBucket: "no-input-signal-322709.appspot.com",
  messagingSenderId: "932626794110",
  appId: "1:932626794110:web:d16999d2002a747d26ba2f",
  measurementId: "G-N81PG1YHJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);