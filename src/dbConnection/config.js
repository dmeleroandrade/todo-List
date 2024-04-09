

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyADYK8u0SlmVRsktShXctIT9gtQN1Yz0cU",
    authDomain: "todolist-dfaa0.firebaseapp.com",
    projectId: "todolist-dfaa0",
    storageBucket: "todolist-dfaa0.appspot.com",
    messagingSenderId: "279858469040",
    appId: "1:279858469040:web:9d8ad9b4470102f0968375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);

 export {db}